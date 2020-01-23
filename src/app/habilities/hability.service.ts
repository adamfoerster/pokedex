import { uuidv4 } from './../shared/helpers';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { IHability } from '../interfaces';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HabilityService {
  private habilities: BehaviorSubject<IHability[]> = new BehaviorSubject([]);
  private selectedHability: BehaviorSubject<IHability> = new BehaviorSubject(
    null
  );
  get habilities$() {
    return this.habilities.asObservable();
  }
  get selectedHability$() {
    return this.selectedHability.asObservable();
  }
  constructor(private http: HttpClient) {}

  fetchHabilities() {
    return this.http
      .get<IHability[]>(`${env.api}habilities`)
      .subscribe(habs => this.habilities.next(habs));
  }

  loadHability(id) {
    return this.http
      .get<IHability>(`${env.api}habilities/${id}`)
      .subscribe(hab => this.selectedHability.next(hab));
  }

  saveHability(hability: IHability) {
    if (!hability.id) {
      return this.http.post(`${env.api}habilities`, {
        ...hability,
        id: uuidv4()
      });
    }
    return this.http.patch(`${env.api}habilities/${hability.id}`, hability);
  }

  removeHability(id: string) {
    return this.http.delete(`${env.api}habilities/${id}`);
  }

  desselectHability() {
    this.selectedHability.next(null);
  }
}
