// import { Component } from '@angular/core';
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
