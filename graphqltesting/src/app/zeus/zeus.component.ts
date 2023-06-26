// import { Component } from '@angular/core';
// import { User, Query } from './types';
// import { GraphQLClient } from 'graphql-request';
// import { Apollo } from 'apollo-angular';
// import { MyQuery, MyMutation, MyType } from './types';

// @Component({
//   selector: 'app-zeus',
//   templateUrl: './zeus.component.html',
//   styleUrls: ['./zeus.component.scss']
// })
// export class ZeusComponent {
//   constructor(private apollo: Apollo) {}

//   async fetchData(): Promise<void> {
//     const response = await this.apollo.query<MyQuery>({
//       query: `
//         query {
//           // GraphQL query
//         }
//       `
//     }).toPromise();

//     // Handle the response data
//     console.log(response.data);
//   }
// }

// import { Apollo } from 'apollo-angular';
// import { Zeus } from './path/to/types';
// import { Observable, map } from 'rxjs';

// export class ZeusComponent {

//   constructor(private apollo: Apollo) {}

//   public getItems(): Observable<Zeus.GetItemsQuery['items']> {
//     return this.apollo.query<Zeus.GetItemsQuery>({
//       query: Zeus.GetItemsDocument,
//     }).pipe(
//       map(result => result.data.items)
//     );
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { gql, GraphQLClient } from 'graphql-request';
// import { Query, Mutation, User } from 'graphql-zeus';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent implements OnInit {
//   private endpoint = 'https://your-graphql-endpoint.com/graphql';
//   private client: GraphQLClient;

//   constructor() {
//     this.client = new GraphQLClient(this.endpoint);
//   }

//   ngOnInit(): void {
//     // Perform GraphQL CRUD operations here
//   }

//   createUser(user: User): void {
//     const mutation = gql`
//       mutation CreateUser($user: UserInput!) {
//         createUser(user: $user) {
//           id
//           name
//           email
//         }
//       }
//     `;

//     const variables = { user };

//     this.client.request<Mutation>(mutation, variables)
//       .then((response) => {
//         console.log('Created user:', response.createUser);
//       })
//       .catch((error) => {
//         console.error('Error creating user:', error);
//       });
//   }

//   getUser(id: string): void {
//     const query = gql`
//       query GetUser($id: ID!) {
//         getUser(id: $id) {
//           id
//           name
//           email
//         }
//       }
//     `;

//     const variables = { id };

//     this.client.request<Query>(query, variables)
//       .then((response) => {
//         console.log('User:', response.getUser);
//       })
//       .catch((error) => {
//         console.error('Error fetching user:', error);
//       });
//   }

//   updateUser(id: string, updates: Partial<User>): void {
//     const mutation = gql`
//       mutation UpdateUser($id: ID!, $updates: UserInput!) {
//         updateUser(id: $id, updates: $updates) {
//           id
//           name
//           email
//         }
//       }
//     `;

//     const variables = { id, updates };

//     this.client.request<Mutation>(mutation, variables)
//       .then((response) => {
//         console.log('Updated user:', response.updateUser);
//       })
//       .catch((error) => {
//         console.error('Error updating user:', error);
//       });
//   }

//   deleteUser(id: string): void {
//     const mutation = gql`
//       mutation DeleteUser($id: ID!) {
//         deleteUser(id: $id)
//       }
//     `;

//     const variables = { id };

//     this.client.request<Mutation>(mutation, variables)
//       .then(() => {
//         console.log('User deleted successfully');
//       })
//       .catch((error) => {
//         console.error('Error deleting user:', error);
//       });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { gql, GraphQLClient } from 'graphql-request';

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
  selector: 'app-zeuss',
  templateUrl: './zeus.component.html',
  styleUrls: ['./zeus.component.scss']
})
export class ZeussComponent implements OnInit {
  private endpoint = 'https://your-graphql-endpoint.com/graphql';
  private client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient(this.endpoint);
  }

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

    const variables = { user };

    this.client.request<CreateUserResponse>(mutation, variables)
      .then((response) => {
        console.log('Created user:', response.createUser);
      })
      .catch((error) => {
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

    const variables = { id };

    this.client.request<GetUserResponse>(query, variables)
      .then((response) => {
        console.log('User:', response.getUser);
      })
      .catch((error) => {
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

    const variables = { id, updates };

    this.client.request<UpdateUserResponse>(mutation, variables)
      .then((response) => {
        console.log('Updated user:', response.updateUser);
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  }

  deleteUser(id: string): void {
    const mutation = gql`
      mutation DeleteUser($id: ID!) {
        deleteUser(id: $id)
      }
    `;

    const variables = { id };

    this.client.request<DeleteUserResponse>(mutation, variables)
      .then(() => {
        console.log('User deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  }
}

