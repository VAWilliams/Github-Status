import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Octokit } from 'octokit';
import { OctokitResponse } from '@octokit/types';
import { LoaderService } from 'src/app/shared/services/loader.service';

type Options = { [key: string]: string | number };


@Injectable({
  providedIn: 'root'
})
export class OctokitService extends Octokit {

  constructor(private loaderService: LoaderService) {
    super();
  }

  get<data>(
    uri: string, options?: Options
  ): Observable<OctokitResponse<data, number>> {

    this.loaderService.setState(true);

    const endpoint = `GET ${uri}`;

    const asyncResponse: Promise<OctokitResponse<data, number>> = this.request(
      endpoint, options
    );

    return from(asyncResponse).pipe(
      finalize(() => this.loaderService.setState(false))
    );
  }

}
