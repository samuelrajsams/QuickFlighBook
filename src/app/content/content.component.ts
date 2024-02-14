import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlightDataAPIService } from '../services/flightDataAPI/flight-data-api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent  {

  isActive: boolean = false;
  isActive2: boolean = false;
  tripType: number = 1;
 
  tripTypeEvent(tripType: number) {
    this.tripType = tripType;
  }



}




