import React from "react";
import FormAdd from "../components/FormAdd";
import Header from "../layout/Header";

export default class AddContent extends React.Component {
  render() {
    return (
      <div>
        <Header url="/" text="Back To Home"/>
        <FormAdd />
      </div>
    );
  }
}
