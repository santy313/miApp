import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MensajeService {
  private apiUrl = 'http://localhost:4000/api/mensaje';

  constructor(private http: HttpClient) {}

  getMensaje(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
