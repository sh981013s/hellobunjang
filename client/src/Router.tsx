import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import SearchPage from './Pages/SearchPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
