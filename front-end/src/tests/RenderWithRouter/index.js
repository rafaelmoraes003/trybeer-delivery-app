import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import App from '../../App';

const renderWithRouter = (route = '/', component = <App />) => {
  const history = createMemoryHistory({ initialEntries: [route] });
  return ({
    ...render(
      <Router navigator={ history } location={ route }>{ component }</Router>,
    ),
    history,
  });
};
export default renderWithRouter;
