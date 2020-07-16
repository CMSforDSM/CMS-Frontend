import React from 'react';
import { LoginPage, Home, MyPage, RecruitPage, ClubPostPage } from './Pages';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';
function App() {
  return (
    <>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/mypage" component={MyPage}/>
      <Route exact path="/recruit" component={RecruitPage}/>
      <Route exact path="/clubpost" component={ClubPostPage}/>
    </>
  );
}

export default App;