import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ParksData } from '../interfaces/parks.interface';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  constructor(private http: HttpClient) { }

  getData = (): Observable<ParksData> =>
    this.http.get<ParksData>('assets/dataset.json');
}
