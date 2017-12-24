import React from "react";
import { Link, Switch, Route } from 'react-router-dom';

export default class ViewItem extends React.Component {
  handleClickChange(e){
    // console.log('bien123');
    const dataId = this.key;
    console.log(dataId);
    this.props.deleteItem(dataId);
  }

  render() {
    const dataFood = this.props.data;
    let status= '';
    if(dataFood.status) {
      status = <strong className='new'>{dataFood.status}</strong>;
    }
    return (
      <li className="item">
        {status}
        <img src={dataFood.image} alt="Alternate" width="283" height="164" />
        <div className="item_detail">
          <h3>{dataFood.title}</h3>
          <p>{dataFood.content}</p>
          <div className="text-center">
            <Switch>
              <Route exact path='/' render={() => (<Link to={dataFood.id} ><span className="info">Update</span></Link>)}/>
            </Switch>
            <span className="info" onClick={this.handleClickChange.bind(this)}>Delete</span>
          </div>
        </div>
      </li>
    );
  }
}
