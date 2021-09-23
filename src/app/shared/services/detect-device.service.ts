import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetectDeviceService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  onlyExtraSmallDevice(): Observable<boolean> {
    return this.breakpointObserver.observe('(max-width: 600px)').pipe(map(result => result.matches));
  }

  onlyCellphoneDevice(): Observable<boolean> {
    return this.breakpointObserver.observe('(min-width: 600px)').pipe(map(result => result.matches));
  }

  onlyTabletDevice(): Observable<boolean> {
    return this.breakpointObserver.observe('(min-width: 768px)').pipe(map(result => result.matches));
  }

  onlyDesktopDevice(): Observable<boolean> {
    return this.breakpointObserver.observe('(min-width: 992px)').pipe(map(result => result.matches));
  }

  onlyExtraLargeDevice(): Observable<boolean> {
    return this.breakpointObserver.observe('(min-width: 1200px)').pipe(map(result => result.matches));
  }

  onSetDevice(size: number): Observable<boolean> {
    return this.breakpointObserver.observe(`(min-width: ${size}px)`).pipe(map(result => result.matches));
  }
}
