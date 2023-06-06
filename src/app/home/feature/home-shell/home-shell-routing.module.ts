import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleHelper } from 'src/app/shared/utils/helpers';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../homepage/homepage.module').then((m) => m.HomePageModule),
    title: TitleHelper.format('Home'),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeShellRoutingModule {}
