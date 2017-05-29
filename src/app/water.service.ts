import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class WaterService {
    // private baseUrl: string = 'http://jacintomendes.com:3000/getAll';

  constructor(private http: Http) {}

    fetchData() {

        // return this.http.get('http://jacintomendes.com:3000/getAll')
        return this.http.get('fountains.json')
          .map(
            (res) => res.json()
          )
    }

    getReqData(param1, param2) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('param1', param1);
        urlSearchParams.append('param2', param2);
        let body = urlSearchParams.toString()

        return this.http.post('http://jacintomendes.com:3000/getFountains', body, {headers:headers})
        .map(
          (res) => res.json()
        )

    }

    sayHello() {
      console.log("sayHello");
    }



}
