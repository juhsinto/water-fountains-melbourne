import { WaterService } from './../water.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { MapsAPILoader } from 'angular2-google-maps/core';


declare var my_postiion;

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})



export class QueryComponent implements OnInit {

  // TEST DATA
  markers = [
    {
      lat: 51.673858,
      lng: 7.815982,
    },
    {
      lat: 51.373858,
      lng: 7.215982,
    },
    {
      lat: 51.723858,
      lng: 7.895982,
    }
  ];

  // flag to store if gps disabled by browser
  gpsDisabled: boolean = false;

  // form to store input gps data
  myForm: FormGroup;

  // google maps zoom level
  zoom: number = 14;

  // initial center position for the map

  lat: number;
  // lat: number = -37.8182711;

  lng: number;
  // lng: number = 144.9670618;

  // store the fountain data ; this will come after API call
  fountains = [];

  constructor(private waterService: WaterService, fb: FormBuilder) {
    this.myForm = fb.group({
      'longitude': [''],
      'latitude': ['']
    });
  }

  ngOnInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log('The GPS location obtained from browser ' + this.lat + ', ' + this.lng);

        this.waterService.getReqData(this.lng, this.lat)
          //this.waterService.fetchData()
          .subscribe(
          (data) => this.fountains = data
          );
      }, (failure) => this.gpsDisabled = true
      );
    } else {
      alert('your browser does not support gps');
    }
  }

  // this is run on submit
  onSubmit(value: any): void {
    this.myfunction();
    
  }


  myfunction() {
    console.log(this.fountains.length);
  }
}
