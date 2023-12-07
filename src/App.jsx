import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './components/AddBlog';
import Auth from './components/Auth';
import BlogDetail from './components/BlogDetail';
import Header from './components/Header';
import UserBlogs from './components/UserBlogs';
import React from 'react';
import Blogs from './components/Blogs';

function App() {
  return (
    <React.Fragment >
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/myBlogs/:id" element={<BlogDetail />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
