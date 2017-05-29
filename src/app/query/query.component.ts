import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { WaterService } from '../water.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  myForm: FormGroup;

  longitude: string;
  latitude: string;

  fountains = [];


  constructor(private waterService: WaterService, fb: FormBuilder) {
    this.myForm = fb.group({
        'longitude': [''],
        'latitude': ['']
      });
     }

  ngOnInit() {
  }


  onSubmit(value: any): void {
    // console.log('you submitted value: ', value.longitude, value.latitude);
    this.waterService.getReqData(value.longitude, value.latitude)
    .subscribe(
      (data) => this.fountains = data
    );

    this.myfunction();
  }


  myfunction() {
    console.log(this.fountains);
  }
}
