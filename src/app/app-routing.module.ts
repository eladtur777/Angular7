import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { MainNewComponent } from './Components/main-new/main-new.component';
import { MainFormComponent } from './Components/main-form/main-form.component';
import { MainNewComponentComponent } from './LatestVersion/Components/main-new-component/main-new-component.component';

const routes: Routes = [
  { path:'', component: MainNewComponent },
  { path:'app-main-form' ,component: MainFormComponent },
  { path:'app-main-new-component', component:MainNewComponentComponent}

  //MainNewComponentComponent

 // MainNewComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
