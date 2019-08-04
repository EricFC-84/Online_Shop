import { TestBed } from '@angular/core/testing';

import { ServVirtualShopService } from './-serv-virtual-shop.service';

describe('ServVirtualShopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServVirtualShopService = TestBed.get(ServVirtualShopService);
    expect(service).toBeTruthy();
  });
});
