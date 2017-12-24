import React from "react";
import View from "../components/View";
import Header from "../layout/Header";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header url="/addcontent" text="Add New"/>
        <View />
      </div>
    );
  }
}
