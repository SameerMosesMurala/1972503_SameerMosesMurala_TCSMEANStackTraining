import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionpageComponent } from './questionpage/questionpage.component';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [
  {path:"\startTest",component:StartpageComponent},
  {path:"\questionPageURL",component:QuestionpageComponent},
  {path:"",redirectTo:"\startTest",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
