import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/model/usuarios.model';
import { UsuariosService } from 'src/app/usuarios.service';



@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {


  constructor(private service: UsuariosService) { }
  
  @Output() addUsuario = new EventEmitter();
  
  userForm = new FormGroup({
  nombre : new FormControl(''),
  email : new FormControl(''),
  telefono: new FormControl(''),
  password : new FormControl(''),
  })
  ngOnInit(): void {
    
  }


  addUsario(form:any) {    
    let usuario = new Usuario();
    usuario.apynom = form.controls['nombre'].value;
    usuario.email = form.controls["email"].value;
    usuario.contraseña = form.controls['telefono'].value;
    usuario.telefono = form.controls['password'].value;         
    this.service.addUsuario(usuario)
  
  }
}
