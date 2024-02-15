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
  mockData: string[] = ['Hyderabad (hyd)', 'Delhi (del)', 'Orange (Chennai (ch))', 'Bangalore (bng)', 'Kochi (kc)', 'Ayodya (ad)', 'Trupati (tpty)', 'Gannavaram (gnv)'];

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
    this.searchAirports();
    if (this.searchFlightsForm.value.originLocationCode.trim() === '') {
      this.sourceSearchResults = [];
    } else {
      this.sourceSearchResults = this.mockData
        .filter(item => item.toLowerCase().includes(this.searchFlightsForm.value.originLocationCode.toLowerCase()));
    }
  }

  onSearchDestination(): void {
    this.searchAirports();
    if (this.searchFlightsForm.value.destinationLocationCode.trim() === '') {
      this.destinationSearchResults = [];
    } else {
      this.destinationSearchResults = this.mockData
        .filter(item => item.toLowerCase().includes(this.searchFlightsForm.value.destinationLocationCode.toLowerCase()));
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

  searchAirports() {
    //https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=HYD&countryCode=IN
    const type = 'HYD'
    this.flightService.getAirportLocations(type).subscribe(resp => {
      console.log(resp);
    })
  }

}
