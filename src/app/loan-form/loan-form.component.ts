import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent {
  formData: any;
 applicantType: string = '';
 sector: string = '';
 typeOfLoan: string = '';
 estimatedCostOfCapitalCosts: number = 0;
 estimatedCostOfOperationalCosts: number = 0;
 financialSolvency: any;
 landDocument: any;
 tEStudy: any;

  @Output() dataSubmitted = new EventEmitter<any>();

  onSubmit() {
    const formData = {
      applicantType: this.applicantType,
      sector: this.sector,
      typeOfLoan: this.typeOfLoan,
      estimatedCostOfCapitalCosts: this.estimatedCostOfCapitalCosts,
      estimatedCostOfOperationalCosts: this.estimatedCostOfOperationalCosts,
      financialSolvency: this.financialSolvency,
      landDocument: this.landDocument,
      tEStudy: this.tEStudy
    };

    
  }
}
