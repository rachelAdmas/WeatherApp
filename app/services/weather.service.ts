import { Injectable } from '@angular/core';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import {CurrentWeather} from '../components/current-weather.component.ts'


@Injectable()
export class WeatherService {
    weatherUrl = 'https://api.darksky.net/forecast/cf9cd81459a4017710b133ffa3d1bcf8/42.3601,-71.0589?callback=JSONP_CALLBACK';
    constructor(private http: Http, private jsonp:Jsonp) {}
    
    getCurrentForecast(){
        return this.jsonp
         .get(this.weatherUrl)
            .map((res: Response) => res.json());
  }
}