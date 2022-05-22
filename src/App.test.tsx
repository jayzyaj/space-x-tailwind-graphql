import React from 'react';
import { mount } from '@cypress/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { LaunchList } from './pages/LaunchList';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/graphql';

it('renders learn react link', () => {
  let location;
  mount(
    <ApolloProvider client={client}>
      <MemoryRouter initialEntries={['/']}>
        <Route path="/">
          <LaunchList />
        </Route>
        <Route
          path="/*"
          render={({ location: loc }) => {
            location = loc
            return null
          }}
        />
      </MemoryRouter>,
    </ApolloProvider>
  )
  cy.get('p').contains('Loading Space-X Launches');
});