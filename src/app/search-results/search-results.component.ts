import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightDataAPIService } from '../services/flightDataAPI/flight-data-api.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {


  searchedFlights: any = JSON.parse(sessionStorage.getItem('searchedFlights') ?? '');

  constructor() {
    // import data through the router


  }


  ngOnInit(): void {
    // Call seats resevation

  }





}


