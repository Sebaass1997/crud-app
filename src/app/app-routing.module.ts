import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AddUsuarioComponent } from './usuarios/add-usuario/add-usuario.component';

const appRoutes = [
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  { path: 'usuarios', component: UsuariosComponent,  pathMatch: 'full'},
  { path: 'usuarios/add', component: AddUsuarioComponent,  pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes)