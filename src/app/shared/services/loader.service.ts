import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading: BehaviorSubject<boolean>;

  constructor() {
    this.isLoading = new BehaviorSubject<boolean>(false);
  }

  getState(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  setState(value: boolean): void {
    this.isLoading.next(value);
  }

}
