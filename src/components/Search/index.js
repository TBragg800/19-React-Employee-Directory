import React, { Component } from "react";
import API from "../../utils/API";
import TableBody from "../TableBody";
import SearchForm from "../SearchForm";

class Search extends Component {
  state = {
      employees: [{}],
      search: "",
      filtered: [{}],
      order: "asc",
      loading: true,
      sorted: false
  };

  componentDidMount() {
    API.searchEmployees()
    .then(res => this.setState({ employees: res.data.results }))
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    // const name = event.target.name;
    // const value = event.target.value;
    // this.setState({
    //   [name]: value
    // });
    let { employees, search } = this.state;
    const searchLC = search.toLowerCase();
    let searchEmployee = employees.filter(sorted => {
        return (
           sorted.name.first.toLowerCase().includes(searchLC) ||
           sorted.name.last.toLowerCase().includes(searchLC) ||
           sorted.email.toLowerCase().includes(searchLC) ||
           sorted.cell.toLowerCase().includes(searchLC) ||
           sorted.dob.date.toLowerCase().includes(searchLC) 

        )
    })
        
        this.setState({ sorted: true })
        this.setState({ search: event.target.value });
        this.setState({ filtered: searchEmployee });
        
  };

  searchEmployees = () => {
    if (this.state.sorted) {
      return <div>
        {this.state.filtered.map(employee => (
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
    }

    else if (this.state.loading === false) {
      return <div>
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
    }
  }


  render() {
    return (
          <div>
            <SearchForm 
            handleInputChange={this.handleInputChange}/>
            {this.searchEmployees()}
            {this.sortBy}
            
          </div>
    );
  }
}

export default Search;