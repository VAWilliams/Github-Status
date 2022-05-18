import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { OctokitResponse } from '@octokit/types';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { request } from '@octokit/request';

type Options = { [key: string]: string | number };


@Injectable({
  providedIn: 'root'
})
export class OctokitService {

  constructor(private loaderService: LoaderService) {}

  get<data>(
    uri: string, options?: Options
  ): Observable<OctokitResponse<data, number>> {

    this.loaderService.setState(true);

    const endpoint = `GET ${uri}`;

    const asyncResponse: Promise<OctokitResponse<data, number>> = request(
      endpoint, options
    );

    return from(asyncResponse).pipe(
      finalize(() => this.loaderService.setState(false))
    );
  }

}
