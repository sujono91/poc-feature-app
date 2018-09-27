import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

let featureRoutes: Routes = [
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogPageModule'
  }
];

featureRoutes = featureRoutes.filter((route) => {
  return environment.features.indexOf(route.path) >= 0;
});

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  }
]
routes.push(...featureRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
