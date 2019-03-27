import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { RentalService  } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
import { MouseEvent,AgmMap } from '@agm/core';

var google: any;


@Component({
  selector: 'bwm-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {
  zoom: number =3;
  latitude : number;
  longitude : number;
  
  @ViewChild('AgmMap') agmMap: AgmMap;
 
  // latitiude = RentalDetailComponent.rental.latitiude;
  // longitude =  RentalDetailComponent.rental.longitude;
  
  @Input() rental: any;

  
  constructor(
    private service : RentalService,
    private route  :  ActivatedRoute,
    ) { }

  ngOnInit() {
    
    
  }

  


  
}
