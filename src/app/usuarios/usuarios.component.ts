import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../model/usuarios.model';
import { UsuariosService } from '../usuarios.service';
import { NgModel, NgControl } from '@angular/forms'


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})



export class UsuariosComponent implements OnInit {
  //usuarios?: Usuario[];
  usuarios:any = [];
  apynom = '';

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
    this.loadUsuarios()
  }

  loadUsuarios() {
    this.service.getUsuarios().subscribe(response => this.usuarios = response.results)
    
  }
  
  searchUsuario(apynom:any): void {
    
      this.service.findByID(apynom.value)
        .subscribe(
          data => {
            this.usuarios = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  
deleteUser(idusuario:any){
  this.service.deleteUsuario(idusuario);
  
}    

editUser(idusuario:any){

}

editPassword(idusuario:any){

}


}
