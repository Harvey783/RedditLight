import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PostCreate from './posts/PostCreate';
import PostEdit from './posts/PostEdit';
import PostDelete from './posts/PostDelete';
import PostList from './posts/PostList';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PostList} />
          <Route path="/posts/new" exact component={PostCreate} />
          <Route path="/posts/edit" exact component={PostEdit} />
          <Route path="/posts/delete" exact component={PostDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
