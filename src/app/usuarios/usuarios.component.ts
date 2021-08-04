import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any = []
  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
  }

  loadUsuarios() {
    this.service.getUsuarios().subscribe(response => this.usuarios = response)
  }

}
