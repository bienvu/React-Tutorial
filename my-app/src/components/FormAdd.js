import React from "react";

export default class FormAdd extends React.Component {
  render() {
    return (
      <div id="container">
        <div className="inner-padding">
          <form action="/action_page.php">
            <label>Enter title:</label>
            <input name="title" type="text" placeholder="Enter title ..." />
            <label>Enter link image</label>
            <input name="title" type="url" placeholder="Enter link image ..." />
            <label>Enter description: </label>
            <textarea name="description" rows="4" cols="30" placeholder="Enter description ..."></textarea>
            <div className="checkBox-group">
              <input id="checkBox" type="checkbox" name="checkbox" />
              <label className="checkbox-lable" for="checkbox1">Is new products?:</label>
            </div>
            <input className="btn btn-blue" type="submit" value="Save product" />
          </form>
        </div>
      </div>
    );
  }
}
