import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Usuario } from './model/usuarios.model';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  list = [];
  constructor(private http: HttpClient) { }
  
  
  readonly baseUrl = 'http://localhost:3000/usuarios';
  
  getUsuarios() {
    const url = this.baseUrl;
    return this.http.get<any>(url);
    
  }

  findByID(apynom: any){
    return this.http.get<any>(`${this.baseUrl}/${apynom}`);
  }

  addUsuario(usuario :Usuario){
  
    const url = this.baseUrl ;            
    return this.http.post<any>(url,
      usuario)
    .subscribe(response => {
      this.list = response.items;
  });
  }

  deleteUsuario(idusuario : string){
  
    const url = this.baseUrl ;            
    return this.http.delete<any>(`${this.baseUrl}/${idusuario}`)
    .subscribe(response => {
      this.list = response.items;
  });
  }


}
