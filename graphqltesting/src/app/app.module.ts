import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from '../graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { CharacterComponent } from './character/character.component';
import { SpeciesComponent } from './species/species.component';
import { TaskComponent } from './task/task.component';
import { ZeussComponent } from './zeus/zeus.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    BrowseComponent,
    CharacterComponent,
    SpeciesComponent,
    TaskComponent,
    ZeussComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'https://48p1r2roz4.sse.codesandbox.io',
        }),
      };
    },
    deps: [HttpLink],
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
