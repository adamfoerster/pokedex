import { ICategory } from './../interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { uuidv4 } from '../shared/helpers';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: BehaviorSubject<ICategory[]> = new BehaviorSubject([]);
  private selectedCategory: BehaviorSubject<ICategory> = new BehaviorSubject(
    null
  );
  get categories$() {
    return this.categories.asObservable();
  }
  get selectedCategory$() {
    return this.selectedCategory.asObservable();
  }
  constructor(private http: HttpClient) {}

  fetchCategories() {
    return this.http
      .get<ICategory[]>(`${env.api}categories`)
      .subscribe(habs => this.categories.next(habs));
  }

  loadCategory(id) {
    return this.http
      .get<ICategory>(`${env.api}categories/${id}`)
      .subscribe(hab => this.selectedCategory.next(hab));
  }

  saveCategory(hability: ICategory) {
    if (!hability.id) {
      return this.http.post(`${env.api}categories`, {
        ...hability,
        id: uuidv4()
      });
    }
    return this.http.patch(`${env.api}categories/${hability.id}`, hability);
  }

  removeCategory(id: string) {
    return this.http.delete(`${env.api}categories/${id}`);
  }

  desselectCategory() {
    this.selectedCategory.next(null);
  }
}
