import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const captureStateRegex = /(state):(\w+)/;

@Component({
  selector: 'app-state-toggle',
  templateUrl: './state-toggle.component.html',
  styleUrls: ['./state-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateToggleComponent implements OnInit {

  private query: string;
  state$: Observable<string>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.state$ = this.activatedRoute.queryParams
      .pipe(
        tap(params => this.query = params.q),
        map(params => {
          const [,, state] = params.q.match(captureStateRegex) ?? [];
          return state;
        })
      );
  }

  update(state: string) {

    const reference = `$1:${state}`;
    const q = this.query.replace(captureStateRegex, reference);

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { q, page: 1 },
      queryParamsHandling: 'merge'
    });

  }

}
