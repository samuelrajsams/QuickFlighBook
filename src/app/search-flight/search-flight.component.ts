import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FlightDataAPIService } from '../services/flightDataAPI/flight-data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent {
  isActive: boolean = false;
  isActive2: boolean = false;

  sourceSearchResults: string[] = [];
  destinationSearchResults: string[] = [];
  originLocationCode: FormControl = new FormControl();
  searchFlightsForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    public flightService: FlightDataAPIService) {
    this.searchFlightsForm = this.formBuilder.group({
      originLocationCode: ['Hyderabad, India (HYD)'],
      destinationLocationCode: ['New Delhi, India (DEL)']
    });
  }

  ngOnInit(): void {
  }

  setSource(result: string): void {
    this.searchFlightsForm.get('originLocationCode')?.setValue(result);
    this.sourceSearchResults = [];
  }

  setDestination(result: string): void {
    this.searchFlightsForm.get('destinationLocationCode')?.setValue(result);
    this.destinationSearchResults = [];
  }

  onSearchSource(): void {
    const originLocationCode = this.searchFlightsForm.value.originLocationCode;
    this.searchAirports(originLocationCode, 'source');
    if (this.searchFlightsForm.value.originLocationCode.trim() === '') {
      this.sourceSearchResults = [];
    } 
  }

  onSearchDestination(): void {
    const destinationLocationCode = this.searchFlightsForm.value.destinationLocationCode;
    this.searchAirports(destinationLocationCode, 'destination');
    if (this.searchFlightsForm.value.destinationLocationCode.trim() === '') {
      this.destinationSearchResults = [];
    } else {

    }
  }

  focusEvent(status: boolean) {
    this.isActive = status
  };

  focusEvent2(status: boolean) {
    this.isActive2 = status
  }



  getFlightParameters() {
    const apiParams = {
      originLocationCode: 'HYD',
      destinationLocationCode: 'DEL',
      departureDate: '2024-02-22',
      adults: 2,
      max: 5
    }
    this.flightService.getAvailableFlights(apiParams).subscribe((resp: any) => {
      if (resp.data.length > 0) {
        this.router.navigateByUrl('/search-results');
        sessionStorage.setItem('searchedFlights', JSON.stringify(resp));
      }
    });
  }

  searchAirports(value: any, type: string) {
    this.flightService.getAirportLocations(value).subscribe((resp: any) => {
      if (type === 'source') {
        this.sourceSearchResults = resp.data.map((item: any) => item.name);
      } else {
        this.destinationSearchResults = resp.data.map((item: any) => item.name);
      }
      console.log(this.sourceSearchResults);
    })
  }

}
