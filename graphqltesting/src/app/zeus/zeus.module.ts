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
export class AppZeusModule {
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
