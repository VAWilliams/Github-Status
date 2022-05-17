import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { GithubService } from '../http/github.service';
import { Repository } from '../models/repository.model';


@Injectable({
  providedIn: 'root'
})
export class RepositoryResolver implements Resolve<Repository> {

  constructor(private router: Router, private githubService: GithubService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Repository> {

    const owner = route.queryParamMap.get('owner');
    const repo = route.queryParamMap.get('repo');

    if (!owner || !repo) {
      this.router.navigate(['/']);
      return EMPTY;
    }

    return this.githubService.getRepository(owner, repo);
  }

}
