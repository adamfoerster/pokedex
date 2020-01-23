import { HabilityService } from './hability.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkd-habilities',
  templateUrl: './habilities.component.html',
  styleUrls: ['./habilities.component.sass']
})
export class HabilitiesComponent implements OnInit {
  constructor(private service: HabilityService) {}

  ngOnInit() {
    this.service.fetchHabilities();
  }
}
