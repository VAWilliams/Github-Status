import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string = 'Github Status';
  isLoading: Observable<boolean>;
  currentUrl: Observable<string>;

  constructor(
    private loaderService: LoaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = this.loaderService.getState();
    this.currentUrl = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => {
          const navigationEnd = event as NavigationEnd;
          return navigationEnd.urlAfterRedirects;
        })
      );
  }

}
