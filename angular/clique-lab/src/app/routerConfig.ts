// routerConfig.ts

import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

export const appRoutes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'snack',
    component: SnackbarComponent
  },
  {
    path: 'dialog',
    component: DialogContentComponent
  }
];