import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';




const routes: Routes = [	

	//path: '/dashboard' PagesRounting
	//path: '/auth' AuthRounting
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: '**', component: NopagefoundComponent }

];

@NgModule({
  imports: [
		RouterModule.forRoot(routes),
		PagesRoutingModule,
		AuthRoutingModule
	],
  exports: [RouterModule]
})
export class AppRoutingModule { }
