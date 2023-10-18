import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adf';

  formData: any = {};
  currentPage: string = 'page1';

  receiveData(formData: any) {
    console.log('Form data received: ' +  formData);
    this.formData = formData;
  }

  navigateToPage2() {
    console.log('Navigating to P2');
    this.currentPage = 'page2';
  }


}
