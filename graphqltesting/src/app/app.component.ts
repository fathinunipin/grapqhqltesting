import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';
import { shareReplay, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'graphqltesting';
  rates$: Observable<any[]> | undefined;
  loading$: Observable<boolean> | undefined;
  errors$: Observable<any> | undefined;

  constructor(protected apollo: Apollo) {}

  public ngOnInit(): void{
    const source$ = this.apollo.query({
      query: gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `
    }).pipe(shareReplay(1));

    // this.rates$ = source$.pipe(map(result => result.data && result.));
    this.loading$ = source$.pipe(map(result => result.loading));
    this.errors$ = source$.pipe(map(result => result.errors));
  }
}
