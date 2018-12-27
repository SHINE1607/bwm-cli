import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';   
@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  id :number;

  constructor( private route : ActivatedRoute) { 
    this.route.params.subscribe(
      params => {
        this.id = params.rentalId;
      }
    )
  }

  ngOnInit() {
  }

}
