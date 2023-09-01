import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './b-home/home.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'' , redirectTo: 'blog/home', pathMatch: 'full'
  },
  {
    path: 'blog/home', component:HomeComponent
  },
  {
    path: 'blog/view/:blogHead', component:ViewComponent
  },
  {
    path: 'blog/update/:blogHead', component:UpdateComponent

  },
  {
    path: 'blog/create', component:CreateComponent

  },
  {
    path:'**',component:PageNotFoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
