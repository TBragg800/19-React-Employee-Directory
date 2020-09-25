import React, { Component } from "react";
import API from "../../utils/API";
import TableBody from "../TableBody";
import SearchForm from "../SearchForm";

class Search extends Component {
  state = {
      employees: [],
      search: "",
      filteredEmployees: [],
      order: "descend"
  };

  componentDidMount() {
    API.searchEmployees()
    .then(res => this.setState({ employees: res.data.results }))
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(event.target.value)
    this.setState({
      // filteredEmployees: event.target.value
      [name]: value
    });
  };

  render() {
    return (
          <div>
            <SearchForm 
            // value={this.state.search}
            // name="search"
            handleInputChange={this.handleInputChange}/>
            {this.state.employees.map(employee => (
            <TableBody 
              photo={employee.picture.medium}
              name={employee.name.first + " " + employee.name.last}
              email={employee.email}
              phone={employee.phone}
              dateOfBirth={employee.dob.date}
              key={employee.dob.date}
            />
            ))}
          </div>
    );
  }
}

export default Search;