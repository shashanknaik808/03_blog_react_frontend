import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './components/AddBlog';
import Auth from './components/Auth';
import BlogDetail from './components/BlogDetail';
import Header from './components/Header';
import React, { useState } from 'react';
import Blogs from './components/Blogs';
import UserBlog from './components/UserBlog';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <React.Fragment >
      <header>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myBlogs" element={<UserBlog />} />
          <Route path="/myBlogs/:id" element={<BlogDetail />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
