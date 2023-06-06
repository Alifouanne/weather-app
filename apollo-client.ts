import { ApolloClient, InMemoryCache } from "@apollo/client";
let client: null | ApolloClient<any> = null;
export const getClient = () => {
  if (!client || typeof window == "undefined") {
    client = new ApolloClient({
      uri: process.env.API_URL,
      cache: new InMemoryCache(),
      headers: {
        Authoraization: `api key ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
      },
    });
  }

  return client;
};
