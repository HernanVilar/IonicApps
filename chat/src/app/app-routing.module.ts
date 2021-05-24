import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lista-realtime',
    loadChildren: () => import('./lista-realtime/lista-realtime.module').then( m => m.ListaRealtimePageModule)
  },
  {
    path: 'primersala',
    loadChildren: () => import('./primersala/primersala.module').then( m => m.PrimersalaPageModule)
  },
  {
    path: 'segundasala',
    loadChildren: () => import('./segundasala/segundasala.module').then( m => m.SegundasalaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
