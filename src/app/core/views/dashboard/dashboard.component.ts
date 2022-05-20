import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor(private router: Router) {}

  search(query: string) {

    this.router.navigate(['/search/repositories'], {
      queryParams: {
        q: query,
        page: 1,
        per_page: 30
      }
    });

  }

}
