import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SearchResult } from '../../models/query.model';
import { Repository } from '../../models/repository.model';

@Component({
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  result$: Observable<SearchResult<Repository>>;

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
