import { Component, OnInit } from '@angular/core';
import { WaterService } from '../water.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input()
  fountains = [];

  constructor(private waterService: WaterService) { }

  ngOnInit() {
    // this.waterService.fetchData().subscribe(
    //   (data) => this.fountains = data
    // );

    // this.waterService.getReqData(144.968714, -37.847798).subscribe(
    //   (data) => this.fountains = data
    // );
  }

  getall() {

  }

}
