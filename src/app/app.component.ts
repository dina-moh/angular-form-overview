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

  receiveData(data: any) {
    this.formData = data;
  }

  navigateToPage2() {
    this.currentPage = 'page2';
  }


}
