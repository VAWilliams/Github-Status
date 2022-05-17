import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubService } from '../http/github.service';


@Injectable({
  providedIn: 'root'
})
export class ClosedIssuesCountResolver implements Resolve<number> {

  constructor(private router: Router, private githubService: GithubService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<number> {

    const owner = route.queryParamMap.get('owner');
    const repo = route.queryParamMap.get('repo');

    if (!owner || !repo) {
      this.router.navigate(['/']);
      return EMPTY;
    };

    return this.githubService
      .queryIssues(`repo:${owner}/${repo} state:closed`, { 
        page: 1,
        per_page: 1
      })
      .pipe(map(result => result.total_count));
  }

}
