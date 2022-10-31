import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'https://weather-crime-backend.herokuapp.com/';
// const TOKEN_KEY = 'access_token';

var headers_object = new HttpHeaders();
headers_object.append('Access-Control-Allow-Origin', 'application/json');

const httpOptions = {
  headers: headers_object
};


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }


  get(year: string, crime_type: string, avg_temp: string, min_temp: string, max_temp: string, pcp: string): Observable<any> {
    return this.http.get(`${baseUrl}/predict?year=${year}&crime_type=${crime_type}&avg_temp=${avg_temp}&min_temp=${min_temp}&max_temp=${max_temp}&pcp=${pcp}`, httpOptions);
  }

}
