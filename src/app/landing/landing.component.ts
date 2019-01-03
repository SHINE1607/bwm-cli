import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  landing = true;
  constructor() { }

  ngOnInit() {
  }

}
