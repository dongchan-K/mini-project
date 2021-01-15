import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/" component={HomePage} exact />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
