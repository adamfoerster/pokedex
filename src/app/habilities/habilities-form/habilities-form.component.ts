import { HabilityService } from './../hability.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pkd-habilities-form',
  templateUrl: './habilities-form.component.html',
  styleUrls: ['./habilities-form.component.scss']
})
export class HabilitiesFormComponent implements OnInit, OnDestroy {
  habilityForm = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    description: [null, Validators.required]
  });
  sub: Subscription;

  constructor(private fb: FormBuilder, private service: HabilityService) {}

  ngOnInit() {
    this.sub = this.service.selectedHability$
      .pipe(filter(hab => !!hab))
      .subscribe(hab => this.habilityForm.patchValue(hab));
  }

  onSubmit() {
    if (!this.habilityForm.valid) {
      return;
    }
    return this.service.saveHability(this.habilityForm.value).subscribe(() => {
      this.service.fetchHabilities();
      this.habilityForm.reset();
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
