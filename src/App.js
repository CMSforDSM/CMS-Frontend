import React from 'react';
import { LoginPage, Home, MyPage, RecruitPage, ClubPostPage } from './Pages';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';
import ClubAdminPage from './Pages/ClubAdminPage';
import AdminPage from './Pages/AdminPage';
import PostViewPage from './Pages/PostViewPage';
import PostWritePage from './Pages/PostWritePage';
function App() {
  return (
    <>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/mypage" component={MyPage}/>
      <Route exact path="/recruit" component={RecruitPage}/>
      <Route exact path="/clubpost" component={ClubPostPage}/>
      <Route exact path="/postview" component={PostViewPage}/>
      <Route exact path="/postwrite" component={PostWritePage}/>
      <Route exact path="/clubadmin" component={ClubAdminPage}/>
      <Route exact path="/admin" component={AdminPage}/>
    </>
  );
}

export default App;
