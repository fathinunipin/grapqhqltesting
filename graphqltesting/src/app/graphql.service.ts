import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  public executeQuery<T>(query: DocumentNode): Observable<T> {
    return this.apollo
      .query<T>({
        query: query,
      })
      .pipe(map((result) => result.data));
  }
}
