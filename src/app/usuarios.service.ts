import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './model/usuarios.model';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  list = [];
  constructor(private http: HttpClient) { }
  
  
  readonly baseUrl = 'http://localhost:3000/';
  
  getUsuarios() {
    const url = this.baseUrl + 'usuarios';
    return this.http.get<any>(url);
    
  }

  findByID(apynom: any){
    return this.http.get<any>(`${this.baseUrl}?apynom=${apynom}`);
  }

  addUsuario(usuario :Usuario){
    console.log(usuario);
    const url = this.baseUrl + 'usuarios';        
    return this.http.post<any>(url,usuario).subscribe(response => {
      this.list = response.items;
  });
  }

}
