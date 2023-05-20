'use client';

import { useQuery } from '@apollo/client';
import { graphql } from '../gql';

export const USER_QUERY = graphql(`
  query user {
    user(id: 1) {
      id
      username
      email
    }
  }
`);

export default function QueryComponent() {
  const { data, loading } = useQuery(USER_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Could not load data</div>;
  }

  return <div>Hello, {data?.user.username}</div>;
}
