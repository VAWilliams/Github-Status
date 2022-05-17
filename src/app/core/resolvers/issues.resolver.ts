import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { GithubService } from '../http/github.service';
import { Issue } from '../models/issue.model';
import { SearchResult } from '../models/query.model';

@Injectable({
  providedIn: 'root'
})
export class IssuesResolver implements Resolve<SearchResult<Issue>> {

  constructor(private router: Router, private githubService: GithubService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<SearchResult<Issue>> {
    const query = route.queryParamMap.get('q');
    const page = route.queryParamMap.get('page');
    const per_page = route.queryParamMap.get('per_page');

    if (!query || !page || !per_page) {
      this.router.navigate(['/']);
      return EMPTY;
    };

    return this.githubService.queryIssues(query, {
      page: +page,
      per_page: +per_page
    })
  }
}
