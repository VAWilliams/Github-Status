import { TestBed } from '@angular/core/testing';

import { RepositoryResolver } from './repository.resolver';

describe('RepositoryResolver', () => {
  let resolver: RepositoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RepositoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
