import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClosedIssuesCountResolver } from './core/resolvers/closed-issues-count.resolver';
import { IssuesResolver } from './core/resolvers/issues.resolver';
import { RepositoriesResolver } from './core/resolvers/repositories.resolver';
import { RepositoryResolver } from './core/resolvers/repository.resolver';
import { DashboardComponent } from './core/views/dashboard/dashboard.component';
import { IssuesComponent } from './core/views/issues/issues.component';
import { NotFoundComponent } from './core/views/not-found/not-found.component';
import { RepositoriesComponent } from './core/views/repositories/repositories.component';
import { RepositoryComponent } from './core/views/repository/repository.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'repositories',
    resolve: {
      repository: RepositoryResolver,
      closed_issues_count: ClosedIssuesCountResolver
    },
    component: RepositoryComponent
  },
  {
    path: 'search/repositories',
    resolve: {
      result: RepositoriesResolver
    },
    component: RepositoriesComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'search/issues',
    resolve: {
      result: IssuesResolver
    },
    component: IssuesComponent,
    runGuardsAndResolvers: 'always'
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
