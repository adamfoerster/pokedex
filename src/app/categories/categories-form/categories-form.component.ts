import { CategoryService } from './../category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pkd-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit, OnDestroy {
  categoryForm = this.fb.group({
    id: [null],
    name: [null, Validators.required]
  });
  sub: Subscription;

  constructor(private fb: FormBuilder, private service: CategoryService) {}

  ngOnInit() {
    this.sub = this.service.selectedCategory$
      .pipe(filter(hab => !!hab))
      .subscribe(hab => this.categoryForm.patchValue(hab));
  }

  onSubmit() {
    if (!this.categoryForm.valid) {
      return;
    }
    return this.service.saveCategory(this.categoryForm.value).subscribe(() => {
      this.service.fetchCategories();
      this.categoryForm.reset();
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
