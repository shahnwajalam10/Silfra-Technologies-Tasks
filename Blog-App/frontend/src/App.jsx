import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";

const App = () => {
  return (
    <Router>
      <h1>📝 Blog App</h1>
      <Routes>
        <Route path="/" element={<>
          <PostForm />
          <PostList />
        </>} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
