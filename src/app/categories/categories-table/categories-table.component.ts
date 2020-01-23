import { CategoryService } from './../category.service';
import { ICategory } from './../../interfaces';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'pkd-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss']
})
export class CategoriesTableComponent implements AfterViewInit {
  @ViewChild(MatTable, { static: false }) table: MatTable<ICategory>;

  displayedColumns = ['id', 'name', 'actions'];

  constructor(private service: CategoryService) {}

  ngAfterViewInit() {
    this.table.dataSource = this.service.categories$;
  }

  edit(id: string) {
    this.service.loadCategory(id);
  }

  remove(id: string) {
    this.service
      .removeCategory(id)
      .subscribe(() => this.service.fetchCategories());
  }
}
