import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  
  constructor(private http: HttpClient) { }
  
  readonly baseUrl = 'http://localhost:3000/';
  
  getUsuarios() {
    const url = this.baseUrl + 'usuarios';
    return this.http.get<any>(url);
    
  }

  findByID(apynom: any){
    return this.http.get<any>(`${this.baseUrl}?apynom=${apynom}`);
  }

  

}
