import { HabilityService } from './../hability.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'pkd-habilities-form',
  templateUrl: './habilities-form.component.html',
  styleUrls: ['./habilities-form.component.scss']
})
export class HabilitiesFormComponent implements OnInit {
  habilityForm = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    description: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private service: HabilityService) {}

  ngOnInit() {
    this.service.selectedHability$
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
}
