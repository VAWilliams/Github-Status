import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartType, Row } from 'angular-google-charts';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Repository } from '../../models/repository.model';

@Component({
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  issueQueryParams(repository: Repository) {
    return {
      q: `repo:${repository.owner.login}/${repository.name} state:closed`,
      page: 1,
      per_page: 30
    }
  }

  chart: {
    type: ChartType,
    data: Row[],
    options: any;
  } = {
    type: ChartType.PieChart,
    data: [],
    options: {
      width: 300,
      height: 300,
      legend: { position: 'bottom', alignment: 'center' },
      sliceVisibilityThreshold: 0
    }
  };

  repository$: Observable<Repository>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.repository$ = this.activatedRoute.data
      .pipe(
        tap(data => {
          const { repository, closed_issues_count } = data;

          const chart_data = [
            ['Closed', closed_issues_count],
            ['Open', repository.open_issues_count]
          ];

          if (chart_data.every(([key, value]) => !value)) return;

          this.chart.data = chart_data;

        }),
        map(data => data.repository),
      );
  }

}
