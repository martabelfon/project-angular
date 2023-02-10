import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsModule } from './pages/about-us/about-us.module';
import { HomeModule } from './pages/home/home.module';
import { DocumentationModule } from './pages/documentation/documentation.module';

const routes: Routes = [
  {path: "", loadChildren: () => import ("./pages/home/home.module").then((module) => module.HomeModule)},
  {path: "about-us", loadChildren: () => import ("./pages/about-us/about-us.module").then((module) => module.AboutUsModule)},
  {path: "documentation", loadChildren: () => import ("./pages/documentation/documentation.module").then((module) => module.DocumentationModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
