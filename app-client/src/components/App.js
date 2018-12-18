import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PostCreate from './posts/PostCreate';
import PostEdit from './posts/PostEdit';
import PostDelete from './posts/PostDelete';
import PostList from './posts/PostList';
import Header from './Header';
import history from './History';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/posts/new" exact component={PostCreate} />
            <Route path="/posts/edit" exact component={PostEdit} />
            <Route path="/posts/delete" exact component={PostDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
