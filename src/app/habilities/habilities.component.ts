import { HabilityService } from './hability.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkd-habilities',
  template: `
    <pkd-habilities-form></pkd-habilities-form>
    <pkd-habilities-table></pkd-habilities-table>
  `
})
export class HabilitiesComponent implements OnInit {
  constructor(private service: HabilityService) {}

  ngOnInit() {
    this.service.fetchHabilities();
  }
}
