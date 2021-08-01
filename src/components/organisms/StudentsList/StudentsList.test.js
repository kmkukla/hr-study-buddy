import React from 'react';
import '@testing-library/jest-dom';
import StudentsList from './StudentsList';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('UsersList', () => {
  it('Renders the component', () => {
    renderWithProviders(<StudentsList />);
  });
});
