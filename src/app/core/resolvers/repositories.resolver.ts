import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { GithubService } from '../http/github.service';
import { SearchResult } from '../models/query.model';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesResolver implements Resolve<SearchResult<Repository>> {

  constructor(private router: Router, private githubService: GithubService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<SearchResult<Repository>> {

    const query = route.queryParamMap.get('q');
    const page = route.queryParamMap.get('page');
    const per_page = route.queryParamMap.get('per_page');

    if (!query || !page || !per_page) {
      this.router.navigate(['/']);
      return EMPTY;
    };
    
    return this.githubService.queryRepositories(query, {
      page: +page,
      per_page: per_page
    });
  }

}
