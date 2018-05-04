// routerConfig.ts

import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { ItemListComponent } from './item-list/item-list.component';
import { DatatableListComponent } from './datatable-list/datatable-list.component';

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
  },
  {
    path: 'item_list',
    component: ItemListComponent
  },
  {
    path: 'datatable_list',
    component: DatatableListComponent
  },
];