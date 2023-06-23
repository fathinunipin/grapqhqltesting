import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Apollo } from 'apollo-angular';
   import { HttpLink } from 'apollo-angular-link-http';
   import { InMemoryCache } from 'apollo-cache-inmemory';
import { AppModule } from './app/app.module';

const uri = 'https://your-graphql-api-url'; // Replace with your GraphQL API endpoint

// export function createApollo(httpLink: HttpLink): Apollo {
//   return new Apollo({
//     link: httpLink.create({ uri }),
//     cache: new InMemoryCache(),
//   });
// }


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
