import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {DeliveryApiService} from '../delivery-api.service'
import { observable } from 'rxjs';
// import { Deliveries } from '../deliveries'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers:[DeliveryApiService]
})
export class HomeComponent implements OnInit {

  title = "Deliveries Call"
  // delivery:Deliveries


  constructor() { }


  ngOnInit(): void {
    

  }

  

}
