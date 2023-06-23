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

// import { Apollo } from 'apollo-angular';
// import { Zeus } from './path/to/types';
// import { Observable, map } from 'rxjs';

// // Inject Apollo into your component or service

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
