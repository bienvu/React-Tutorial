import React from "react";
import ViewItem from "./ViewItem";

export default class View extends React.Component {
  deleteFood(e){

    this.props.handledeleteItem(e);

  }

  render() {
    let data = this.props.dataContent;
    return (
      <div id="container">
        <div className="our_menu">
          <ul className="menu">
            {data.map((item, i) => {
              return <ViewItem data={item} key={i} deleteItem={this.deleteFood.bind(this)}/>
            })}
          </ul>
        </div>
      </div>
    );
  }
}
