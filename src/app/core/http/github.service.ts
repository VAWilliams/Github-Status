import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Issue } from '../models/issue.model';
import { SearchResult } from '../models/query.model';
import { Repository } from '../models/repository.model';
import { OctokitService } from './octokit.service';

interface Constraints {
  [key: string]: string | number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private octokit: OctokitService) { }

  private query<T>(
    query: string,
    type: string,
    constraints: Constraints
  ): Observable<SearchResult<T>> {

    const endpoint = `/search/${type}`;
    const options = {
      q: query,
      ...constraints
    };

    return this.octokit
      .get<SearchResult<T>>(endpoint, options)
      .pipe(map(response => response.data));
  }

  getRepository(owner: string, repo: string): Observable<Repository> {

    const endpoint = '/repos/{owner}/{repo}';
    const options = { owner, repo };

    return this.octokit
      .get<Repository>(endpoint, options)
      .pipe(map(response => response.data));
  }

  queryRepositories(
    query: string,
    constraints: Constraints
  ): Observable<SearchResult<Repository>> {
    return this.query<Repository>(query, 'repositories', constraints);
  }

  queryIssues(
    query: string,
    constraints: Constraints
  ): Observable<SearchResult<Issue>> {
    return this.query<Issue>(query, 'issues', constraints);
  }

}
