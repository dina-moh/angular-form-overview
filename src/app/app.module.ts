import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { LoanOverviewComponent } from './loan-overview/loan-overview.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoanRequestComponent,
    LoanFormComponent,
    LoanOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
