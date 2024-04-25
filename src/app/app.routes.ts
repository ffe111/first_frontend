import { Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    { path: '', component: UsersComponent },
    { path: 'add', component: UserAddComponent },
    { path: 'edit/:id', component: UserEditComponent },
];
