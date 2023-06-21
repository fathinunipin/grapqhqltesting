import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink } from '@apollo/client/core';
import { InMemoryCache } from '@apollo/client/core';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
  ],
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const uri = 'http://localhost:4000/graphql'; // Replace with your GraphQL API endpoint

    const httpLinkHandler = httpLink.create({ uri });

    const link = ApolloLink.from([httpLinkHandler]);

    apollo.create({
      link,
      cache: new InMemoryCache(),
    });
  }
}

// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
// import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

// @NgModule({
//   imports: [HttpClientModule, ApolloModule],
//   providers: [
//     {
//       provide: APOLLO_OPTIONS,
//       useFactory: configureApollo,
//       deps: [HttpClientModule],
//     },
//   ],
// })
// export class AppModule {}

// export function configureApollo(httpClient: HttpClientModule): ApolloClientOptions<any> {
//   return {
//     link: httpClient,
//     cache: new InMemoryCache(),
//   };
// }

// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { ApolloModule } from 'apollo-angular';
// import { HttpLinkModule } from 'apollo-angular/http-link'; // Updated import
// import { apolloProvider } from './apolloConfig';

// @NgModule({
//   imports: [
//     HttpClientModule,
//     ApolloModule,
//     HttpLinkModule, // Updated import
//   ],
//   providers: [apolloProvider],
// })
// export class AppModule {}


