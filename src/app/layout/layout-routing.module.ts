import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { GeneralUsersComponent } from '../core/users/general-users/general-users.component';
import { UserProfileComponent } from '../core/users/user-profile/user-profile.component';

const all_routes: Routes = [
  { path: '', redirectTo: 'trips-list', pathMatch: 'full' },

  {
    path: 'users-list',
    component: GeneralUsersComponent,
  },

  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
  },
];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: all_routes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
