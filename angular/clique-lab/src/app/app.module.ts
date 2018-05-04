import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { appRoutes } from './routerConfig';
import * as $ from "jquery";
import { AppComponent } from './app.component';
import { IndexComponent,  DialogContentExampleDialog} from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { SnackbarComponent, PizzaPartyComponent } from './snackbar/snackbar.component';

import { UserService } from './user.service';
import { SnackbarService } from './snackbar.service';
import { DialogService } from './dialog.service';
// import { DialogContentExampleDialog } from './dialog.service';

import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { ItemListComponent } from './item-list/item-list.component';
import { DatatableListComponent } from './datatable-list/datatable-list.component';

@NgModule({
  entryComponents: [SnackbarComponent, PizzaPartyComponent, DialogContentComponent, DialogContentExampleDialog],
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    SnackbarComponent,
    PizzaPartyComponent,
    DialogContentComponent,
    DialogContentExampleDialog,
    ItemListComponent,
    DatatableListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    DataTablesModule
    // ItemListComponent
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [UserService, SnackbarService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
