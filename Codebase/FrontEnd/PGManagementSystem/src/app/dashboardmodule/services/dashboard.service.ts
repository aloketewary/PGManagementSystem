import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AppConstants } from '../../util/app.constants';
import { tap } from 'rxjs/operators/tap';
import { catchError } from 'rxjs/operators/catchError';
import { DashBoardOverViewData } from '../models/dash-board-over-view-data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DashboardService {

  protected classname = 'DashboardService';

  constructor(
    private http: HttpClient
  ) { }

  /** GET heroes from the server */
  getOnlyDashBoardOvData(): Observable<DashBoardOverViewData[]> {
    return this.http.get<DashBoardOverViewData[]>(AppConstants.DASHBOARD_OVERVIEW_DATA)
      .pipe(
      tap(data => this.log(`fetched dashboard data`)),
      catchError(this.handleError('getOnlyDashBoardOvData', []))
      );
  }


  /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.info(this.classname + ': ' + message);
  }

}
