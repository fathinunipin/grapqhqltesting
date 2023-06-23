// import { Injectable } from "@angular/core";
// import { Apollo } from "apollo-angular";
// import { Observable, map } from "rxjs";
// import {
//   CreateMovieGQL,
//   DeleteMovieGQL,
//   EditMovieGQL,
//   GetAllMoviesGQL,
// } from 'src/app/graphql/graphql-custom-backend.service';

// @Injectable({
//     providedIn: 'root',
// })
// export class MovieApiService {
//     constructor(
//         private getAllMoviesGQL: GetAllMoviesGQL,
//         private createMovieGQL: CreateMovieGQL,
//         private editMovieGQL: EditMovieGQL,
//         private deleteMovieGQL: DeleteMovieGQL,
//         private apollo: Apollo
//     ) {}    
    
//     getAllMovies(): Observable<MovieInfoFragment[]> {
//         return this.getAllMoviesGQL.watch().valueChanges.pipe(
//             map((res) => res.data.getAllMovies ?? [])
//         );
//     }
// }