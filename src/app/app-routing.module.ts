import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule )
  },
  {
    path: 'parts',
    loadChildren: () => import('./features/parts/part.module').then( m => m.PartsModule )
  },
  {
    path: 'orders',
    loadChildren: () => import('./features/orders/orders.module').then( m => m.OrdersPageModule )
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
