import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'pkd-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isHandset$: Observable<boolean> = combineLatest([
    this.breakpointObserver
      .observe(Breakpoints.Medium)
      .pipe(map(result => !result.matches)),
    this.breakpointObserver
      .observe(Breakpoints.Large)
      .pipe(map(result => !result.matches)),
    this.breakpointObserver
      .observe(Breakpoints.XLarge)
      .pipe(map(result => !result.matches))
  ]).pipe(
    map(([m, l, x]) => m && l && x),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
