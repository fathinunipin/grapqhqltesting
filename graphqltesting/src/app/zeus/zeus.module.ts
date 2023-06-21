// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { ApolloModule, Apollo } from 'apollo-angular';
// import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
// import { InMemoryCache } from '@apollo/client/core';
// import { GQL } from './graphql/generated'; // Import generated types from graphql-zeus

// @NgModule({
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     ApolloModule,
//     HttpLinkModule,
//   ],
// })
// export class AppModule {
//   constructor(apollo: Apollo, httpLink: HttpLink) {
//     const uri = 'http://localhost:4000/graphql'; // Replace with your GraphQL API endpoint

//     const httpLinkHandler = httpLink.create({ uri });

//     apollo.create({
//       link: httpLinkHandler,
//       cache: new InMemoryCache(),
//     });
//   }
// }
