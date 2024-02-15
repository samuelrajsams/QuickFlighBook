// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiUrl: 'http://localhost:3000/api',
  apiUrl: 'https://test.api.amadeus.com/v1/',
  grant_type: 'client_credentials',
  client_id: 'RLRo1QiMpe4Ea3tz9W1IguNGLifL7cdP',
  client_secret: 'TISFiIGKM8cZ4p5o',
  apiUrl2: "https://test.api.amadeus.com/v2/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
