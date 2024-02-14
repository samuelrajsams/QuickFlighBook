import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
// var flightDataFromAPI: object;

// export{
//   flightDataFromAPI,
// }

@Injectable({
    providedIn: 'root'
})
export class AppService {
   

    constructor(private http: HttpClient) { }

    getToken() {
        const { grant_type, client_id, client_secret } = environment;
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
        let options = { headers: headers }
        const params = new HttpParams({
            fromObject: {
                grant_type,
                client_id,
                client_secret
            }
        });
        return this.http.post(`${environment.apiUrl}security/oauth2/token`, params, options).pipe(map((tokenParams: any) => {
            return tokenParams;
        }));
    }

    setFlightData () {

    }
}