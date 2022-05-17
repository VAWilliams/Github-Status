import { TestBed } from '@angular/core/testing';

import { ClosedIssuesCountResolver } from './closed-issues-count.resolver';

describe('ClosedIssuesCountResolver', () => {
  let resolver: ClosedIssuesCountResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ClosedIssuesCountResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
