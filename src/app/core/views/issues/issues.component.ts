import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  page: number;
  query: string;
  state: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.result$ = this.activatedRoute.data.pipe(
      map(data => data.result),
      tap(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })

        const [query, page] = Object.values(
          this.activatedRoute.snapshot.queryParams
        );
    
        this.page = +page;
        this.query = query;

        this.state = query.match(/(state):(?<state>\w+)/).groups.state;
      })
    );
  }

  filterState(state: string) {
    this.router.navigate(['/search/issues'], {
      queryParams: {
        q: this.query.replace(/(state):\w+/, `$1:${state}`),
        page: 1,
        per_page: 30
      }
    });
  }

  updatePage(page: number) {
    this.router.navigate(['search/issues'], { 
      queryParams: {
        q: this.query.replace(/\s/g, '+'),
        page: page + 1,
        per_page: 30
      }
    });
  }

}
