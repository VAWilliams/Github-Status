import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Issue } from '../../models/issue.model';
import { SearchResult } from '../../models/query.model';

@Component({
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  result$: Observable<SearchResult<Issue>>;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.result$ = this.activatedRoute.data.pipe(
      map(data => data.result),
      tap(() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }))
    );

  }

}
