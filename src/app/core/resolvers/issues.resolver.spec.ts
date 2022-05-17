import { TestBed } from '@angular/core/testing';

import { IssuesResolver } from './issues.resolver';

describe('IssuesResolver', () => {
  let resolver: IssuesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IssuesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
