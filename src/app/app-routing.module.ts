import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from  './app.component';
import {PayComponentComponent} from  './components/pay-component/pay-component.component';

const routes: Routes = [
  // {path: '',component:AppComponent,},
  {path: 'components/pay-component',component:PayComponentComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
