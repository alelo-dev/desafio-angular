import { TestBed } from '@angular/core/testing';
import { BreakpointObserver } from '@angular/cdk/layout';

import { DetectDeviceService } from './detect-device.service';

describe('DetectDeviceService', () => {
  let detectService: DetectDeviceService;
  let breakpointObserver: BreakpointObserver

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakpointObserver]
    });

    breakpointObserver = TestBed.inject(BreakpointObserver);
    detectService = TestBed.inject(DetectDeviceService);
  });

  it('should be created', () => {
    expect(detectService).toBeTruthy();
  });

  it('should have call onlyExtraSmallDevice funcion', () => {
    const breakPointSpy = spyOn(breakpointObserver, 'observe').and.callThrough();
    (<any>window).screen = { width: 601 };

    detectService.onlyExtraSmallDevice();

    expect(breakPointSpy).toHaveBeenCalledTimes(1);
  });

  it('should have call onlyCellphoneDevice funcion', () => {
    const breakPointSpy = spyOn(breakpointObserver, 'observe').and.callThrough();
    (<any>window).screen = { width: 599 };

    detectService.onlyCellphoneDevice();

    expect(breakPointSpy).toHaveBeenCalledTimes(1);
  });

  it('should have call onlyTabletDevice funcion', () => {
    const breakPointSpy = spyOn(breakpointObserver, 'observe').and.callThrough();
    (<any>window).screen = { width: 767 };

    detectService.onlyTabletDevice();

    expect(breakPointSpy).toHaveBeenCalledTimes(1);
  });

  it('should have call onlyDesktopDevice funcion', () => {
    const breakPointSpy = spyOn(breakpointObserver, 'observe').and.callThrough();
    (<any>window).screen = { width: 991 };

    detectService.onlyDesktopDevice();

    expect(breakPointSpy).toHaveBeenCalledTimes(1);
  });

  it('should have call onlyExtraLargeDevice funcion', () => {
    const breakPointSpy = spyOn(breakpointObserver, 'observe').and.callThrough();
    (<any>window).screen = { width: 1199 };

    detectService.onlyExtraLargeDevice();

    expect(breakPointSpy).toHaveBeenCalledTimes(1);
  });

  it('should have call onSetDevice funcion', () => {
    const breakPointSpy = spyOn(breakpointObserver, 'observe').and.callThrough();
    (<any>window).screen = { width: 888 };

    detectService.onSetDevice(888);

    expect(breakPointSpy).toHaveBeenCalledTimes(1);
  });
});
