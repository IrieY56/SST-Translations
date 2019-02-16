import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import FrontPage from '../front/FrontPage';
import NovelSummary from '../novel/summary/NovelSummary';
import Header from '../header/Header';
import NovelChapter from '../novel/chapter/NovelChapter';
import summary from '../../novels/summary';
import Contact from '../contact/Contact';
import Login from '../login/Login';
import NewChapter from '../NewChapter/NewChapter';
import EditChapter from '../editChapter/EditChapter';
import Home from '../NewChapter/ListAll';

const AppRouter = ({ authProps }) => (
  <>
    <div className="header"><Header /></div>
    <Switch>
      <Route exact path="/" render={() => <FrontPage />} />
      <AuthenticatedRoute exact path="/novels/:novel/new" component={NewChapter} props={authProps} />
      <AuthenticatedRoute exact path="/novels/:novel/:chapter/edit" component={EditChapter} props={authProps} />
      <Route path="/novels/:novel/:chapter" render={() => <NovelChapter authProps={authProps} />} />
      <Route exact path="/novels/:novel" render={() => <NovelSummary summary={summary} />} />
      <Route path="/contact" render={() => <Contact />} />
      <UnauthenticatedRoute path="/login" component={Login} props={authProps} />
      <Route exact path="/all" component={Home} props={authProps} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </>
);

export default AppRouter;
