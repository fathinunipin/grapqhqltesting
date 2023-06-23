import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'graphql-tag';

const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

@Component({
  selector: 'app-apollo',
  templateUrl: './apollo.component.html',
  styleUrls: ['./apollo.component.scss']
})
export class ApolloComponent {
  users!: any[];
  loading = true;
  error: any;
  articles: Array<any> | undefined;
  private querySubstription: any;

  constructor(private apollo: Apollo) {
    this.apollo
      .watchQuery<any>({
        query: GET_USERS,
      })
      .valueChanges.subscribe(({ data, loading, errors }) => {
        this.loading = loading;
        this.users = data && data.users;
        this.error = errors;
      });
  }

  // ngOnInit() {
  //   this.querySubstription = this.apollo.watchQuery<any>({
  //     query: articleQuery
  //   })
  //     .valueChanges
  //     .subscribe(({data, loading}) => {
  //       this.loading = loading;
  //       this.articles = data.articles
  //     })
  //   }
  
  // ngOnDestroy() {
  //   this.querySubstription.unsubscribe()
  // }

}

// import { Component } from '@angular/core';
// import { GraphqlService } from '../graphql.service';
// import { MyQueryDocument, MyQueryQuery, MyQueryQueryVariables } from './graphql-zeus';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-my-component',
//   template: `
//     <div *ngIf="myData$ | async as myData">
//       <!-- Display your data here -->
//       {{ myData }}
//     </div>
//   `,
// })
// export class MyComponent {
//   public myData$: Observable<MyQueryQuery> | undefined;

//   constructor(private graphqlService: GraphqlService) {}

//   ngOnInit(): void {
//     this.myData$ = this.graphqlService.executeQuery<MyQueryQuery, MyQueryQueryVariables>(
//       MyQueryDocument,
//       {/* Variables if needed */}
//     );
//   }
// }


