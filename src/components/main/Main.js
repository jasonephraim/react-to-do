import React from 'react';
import { Route, Switch } from 'react-router';

import './Main.scss';
import NewToDo from '../../pages/NewToDo';
import ToDoList from '../../pages/ToDoList';

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={ToDoList}></Route>
        <Route exact path="/new-todo" component={NewToDo}></Route>
        <Route exact path="/all-todos" component={ToDoList}></Route>
      </Switch>
    </div>
  );
}

export default Main;
