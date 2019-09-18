import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Posts from "./components/Posts";
import post from "./components/Post";
import Post from "./components/Post";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/:blog_id/posts/" component={Posts} />
        {/* <Route exact path="/:blog_id/posts/:id" component={Post} /> */}
      </Switch>
      {/* <Post /> */}
      <post />
    </>
  );
};

export default App;
