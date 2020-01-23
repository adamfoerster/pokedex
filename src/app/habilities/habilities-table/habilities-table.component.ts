import { HabilityService } from './../hability.service';
import { IHability } from './../../interfaces';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'pkd-habilities-table',
  templateUrl: './habilities-table.component.html',
  styleUrls: ['./habilities-table.component.scss']
})
export class HabilitiesTableComponent implements AfterViewInit {
  @ViewChild(MatTable, { static: false }) table: MatTable<IHability>;

  displayedColumns = ['id', 'name', 'actions'];

  constructor(private service: HabilityService) {}

  ngAfterViewInit() {
    this.table.dataSource = this.service.habilities$;
  }

  edit(id: string) {
    this.service.loadHability(id);
  }

  remove(id: string) {
    this.service
      .removeHability(id)
      .subscribe(() => this.service.fetchHabilities());
  }
}
