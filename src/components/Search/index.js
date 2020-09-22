import React, { Component } from "react";
import API from "../../utils/API";
import TableBody from "../TableBody";

class Search extends Component {
  state = {
      employees: []
  };

  componentDidMount() {
    API.searchEmployees()
    .then(res => {console.log(res.data)
        this.setState({ employees: res.data.results })})
    .catch(err => console.log(err));
  }

  render() {
    return (
          <div>
            <TableBody results={this.state.employees}/>
          </div>
    );
  }
}

export default Search;