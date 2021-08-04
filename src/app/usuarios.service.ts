import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
 
  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:3306/app/';

  getUsuarios() {
    const url = this.baseUrl + 'usuarios';
    return this.http.get<any>(url);
  }

}
