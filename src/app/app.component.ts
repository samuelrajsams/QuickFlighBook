import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { AppService } from './services/app-service';

let weatherData1: any;
export {
  weatherData1
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Angular';
  data: any = [];

  constructor(public appService: AppService) {
  }
  ngOnInit(): void {
    this.loadToken();

  }

  loadToken () {
    this.appService.getToken().subscribe(resp => {
      sessionStorage.setItem('tokeParams', JSON.stringify(resp))
    })
  }

}





