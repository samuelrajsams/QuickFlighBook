import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
// var flightDataFromAPI: object;

// export{
//   flightDataFromAPI,
// }

@Injectable({
  providedIn: 'root'
})
export class FlightDataAPIService {
  dataFromAPI: any = "";

  constructor(private http: HttpClient) { }

  // Send output on init
  ngOnInit(): void { }

  getAvailableFlights(apiParams: any) {
    const tokeParams:any = sessionStorage.getItem('tokeParams');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(tokeParams).access_token}`
    })
    const { originLocationCode, destinationLocationCode, departureDate, adults, max } = apiParams
    const apiurl = `${environment.apiUrl2}shopping/flight-offers?`
    const params = `originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&adults=${adults}&max=${max}&currencyCode=INR`;
    const url = `${apiurl}${params}`;
    return this.http.get<any>(url, { headers }).pipe(map((resp: any) => {
      return resp;
    }));

  }
}





