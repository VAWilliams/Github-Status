import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  page: number;
  query: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const [query, page] = Object.values(
      this.activatedRoute.snapshot.queryParams
    );

    this.page = +page;
    this.query = query;

    this.result$ = this.activatedRoute.data.pipe(
      map(data => data.result),
      tap(() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }))
    );
  }

  updatePage(page: number) {
    this.router.navigate(['search/repositories'], { 
      queryParams: {
        q: this.query.replace(/\s/g, '+'),
        page: page + 1,
        per_page: 30
      }
    });
  }

}
