import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const appRoutes = [
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  { path: 'usuarios', component: UsuariosComponent,  pathMatch: 'full'}
  
];

export const routing = RouterModule.forRoot(appRoutes)