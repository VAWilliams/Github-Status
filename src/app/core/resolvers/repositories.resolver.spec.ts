import { TestBed } from '@angular/core/testing';

import { RepositoriesResolver } from './repositories.resolver';

describe('RepositoriesResolver', () => {
  let resolver: RepositoriesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RepositoriesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
