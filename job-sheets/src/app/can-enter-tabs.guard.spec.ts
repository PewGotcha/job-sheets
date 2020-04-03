import { TestBed, async, inject } from '@angular/core/testing';

import { CanEnterTabsGuard } from './can-enter-tabs.guard';

describe('CanEnterTabsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanEnterTabsGuard]
    });
  });

  it('should ...', inject([CanEnterTabsGuard], (guard: CanEnterTabsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
