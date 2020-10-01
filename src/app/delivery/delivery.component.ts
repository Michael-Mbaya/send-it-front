import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { Deliveries } from '../deliveries'
import {DeliveryApiService} from '../delivery-api.service'

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
  providers:[DeliveryApiService]
})


export class DeliveryComponent implements OnInit {

  title = "Deliveries"
  delivery:Deliveries


  constructor(private api:DeliveryApiService) { }

  searchUser(){
    this.api.searchUsers().then(
      (success)=>{
        this.delivery=this.api.delivery;
        console.log(this.delivery);
      },
      (error)=>{
        console.log(error)
      }
    )
    

  }

  ngOnInit(): void {
    
    this.searchUser()

  }
  


}