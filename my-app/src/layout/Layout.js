import React from "react";
import Header from './Header';
import Main from './Main';
import foodContent from "../content";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

