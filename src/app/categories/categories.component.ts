import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkd-categories',
  template: `
    <pkd-categories-form></pkd-categories-form>
    <pkd-categories-table></pkd-categories-table>
  `
})
export class CategoriesComponent implements OnInit {
  constructor(private service: CategoryService) {}

  ngOnInit() {
    this.service.fetchCategories();
  }
}
