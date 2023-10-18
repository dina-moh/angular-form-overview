import { Component } from '@angular/core';
import { Input } from '@angular/core'; 

@Component({
  selector: 'app-loan-overview',
  templateUrl: './loan-overview.component.html',
  styleUrls: ['./loan-overview.component.css']
})
export class LoanOverviewComponent {

  @Input() receivedData: any = {};

}
