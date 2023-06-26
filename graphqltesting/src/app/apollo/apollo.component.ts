// import { Component } from '@angular/core';
// import { Apollo } from 'apollo-angular';
// import { gql } from 'graphql-tag';

// const GET_USERS = gql`
//   query {
//     users {
//       id
//       name
//       email
//     }
//   }
// `;

// @Component({
//   selector: 'app-apollo',
//   templateUrl: './apollo.component.html',
//   styleUrls: ['./apollo.component.scss']
// })
// export class ApolloComponent {
//   users!: any[];
//   loading = true;
//   error: any;
//   articles: Array<any> | undefined;
//   private querySubstription: any;

//   constructor(private apollo: Apollo) {
//     this.apollo
//       .watchQuery<any>({
//         query: GET_USERS,
//       })
//       .valueChanges.subscribe(({ data, loading, errors }) => {
//         this.loading = loading;
//         this.users = data && data.users;
//         this.error = errors;
//       });
//   }

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

import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

interface User {
  id: string;
  name: string;
  email: string;
}

interface CreateUserResponse {
  createUser: User;
}

interface GetUserResponse {
  getUser: User;
}

interface UpdateUserResponse {
  updateUser: User;
}

interface DeleteUserResponse {
  deleteUser: boolean;
}

@Component({
  selector: 'app-user',
  templateUrl: './apollo.component.html',
  styleUrls: ['./apollo.component.scss']
})
export class ApolloComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    // Perform GraphQL CRUD operations here
  }

  createUser(user: User): void {
    const mutation = gql`
      mutation CreateUser($user: UserInput!) {
        createUser(user: $user) {
          id
          name
          email
        }
      }
    `;
  
    this.apollo
      .mutate<CreateUserResponse>({
        mutation,
        variables: { user }
      })
      .subscribe(({ data }) => {
        if (data) {
          console.log('Created user:', data.createUser);
        }
      }, (error) => {
        console.error('Error creating user:', error);
      });
  }
  
  getUser(id: string): void {
    const query = gql`
      query GetUser($id: ID!) {
        getUser(id: $id) {
          id
          name
          email
        }
      }
    `;
  
    this.apollo
      .query<GetUserResponse>({
        query,
        variables: { id }
      })
      .subscribe(({ data }) => {
        if (data) {
          console.log('User:', data.getUser);
        }
      }, (error) => {
        console.error('Error fetching user:', error);
      });
  }
  
  updateUser(id: string, updates: Partial<User>): void {
    const mutation = gql`
      mutation UpdateUser($id: ID!, $updates: UserInput!) {
        updateUser(id: $id, updates: $updates) {
          id
          name
          email
        }
      }
    `;
  
    this.apollo
      .mutate<UpdateUserResponse>({
        mutation,
        variables: { id, updates }
      })
      .subscribe(({ data }) => {
        if (data) {
          console.log('Updated user:', data.updateUser);
        }
      }, (error) => {
        console.error('Error updating user:', error);
      });
  }
  
  deleteUser(id: string): void {
    const mutation = gql`
      mutation DeleteUser($id: ID!) {
        deleteUser(id: $id)
      }
    `;
  
    this.apollo
      .mutate<DeleteUserResponse>({
        mutation,
        variables: { id }
      })
      .subscribe(() => {
        console.log('User deleted successfully');
      }, (error) => {
        console.error('Error deleting user:', error);
      });
  }
}


