import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Row } from 'angular-google-charts';
import { Repository } from '../../models/repository.model';

@Component({
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  repository: Repository;
  healthData: Row[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { repository, closed_issues_count } = this.activatedRoute.snapshot.data;

    this.repository = repository;

    if (!repository.open_issues_count || !closed_issues_count) {
      this.healthData = [];
      return;
    }

    this.healthData = [
      ['Closed', closed_issues_count],
      ['Open', repository.open_issues_count]
    ];

  }

  issueQueryParams(repository: Repository) {
    return {
      q: `repo:${repository.owner.login}/${repository.name} state:closed`,
      page: 1,
      per_page: 30
    }
  }

}
