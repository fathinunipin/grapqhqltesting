import { Injectable } from '@angular/core';
   import { Apollo, gql } from 'apollo-angular';

   @Injectable({
     providedIn: 'root',
   })
   export class ApolloService {
     constructor(private apollo: Apollo) {}

     query(queryString: string, variables: any) {
       return this.apollo.query({
         query: gql`
           ${queryString}
         `,
         variables,
       });
     }

     mutate(mutationString: string, variables: any) {
       return this.apollo.mutate({
         mutation: gql`
           ${mutationString}
         `,
         variables,
       });
     }
   }
