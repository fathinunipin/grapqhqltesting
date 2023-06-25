import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  getTasks() {
    return this.apollo.query({
      query: gql`
        query {
          tasks {
            id
            title
            description
            completed
          }
        }
      `,
    });
  }

  getTask(id: string) {
    return this.apollo.query({
      query: gql`
        query($id: ID!) {
          task(id: $id) {
            id
            title
            description
            completed
          }
        }
      `,
      variables: { id },
    });
  }

  createTask(title: string, description: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation($title: String!, $description: String) {
          createTask(title: $title, description: $description) {
            id
            title
            description
            completed
          }
        }
      `,
      variables: { title, description },
    });
  }

  updateTask(id: string, title: string, description: string, completed: boolean) {
    return this.apollo.mutate({
      mutation: gql`
        mutation($id: ID!, $title: String, $description: String, $completed: Boolean) {
          updateTask(id: $id, title: $title, description: $description, completed: $completed) {
            id
            title
            description
            completed
          }
        }
      `,
      variables: { id, title, description, completed },
    });
  }

  deleteTask(id: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation($id: ID!) {
          deleteTask(id: $id)
        }
      `,
      variables: { id },
    });
  }
}
