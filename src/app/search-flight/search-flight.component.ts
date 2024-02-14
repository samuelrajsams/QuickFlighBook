import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

}
