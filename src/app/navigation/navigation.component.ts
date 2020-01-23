import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, combineLatest } from 'rxjs';
import { map, shareReplay, filter, tap } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'pkd-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer;
  smallScreen = false;
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
    tap(ss => (this.smallScreen = ss)),
    shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        if (this.smallScreen) {
          this.drawer.close();
        }
      });
  }
}
