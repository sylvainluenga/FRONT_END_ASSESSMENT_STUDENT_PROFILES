import React, { Component } from 'react';
import './App.css';
import Student from "./components/Student/index.js";
import SearchByName from "./components/SearchBy/search-by-name.js";
import SearchByTag from "./components/SearchBy/search-by-tag.js";
import data from "./resources/index";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students:[],
      searchName: '',
      filteredStudents:[],
      searchTag: ''
    }
  }

  componentDidMount() {
    fetch(data)
    .then(response => response.json())
    .then(data => {
      this.setState({students: data.students})
      if(this.state.searchName==='' && this.state.searchTag==='') {
        this.setState({filteredStudents: this.state.students});
      }
    })
    .catch(error => console.error('Error:', error));

  }

  handleSearchByNameChange = (event) => {
    console.log("this is the search criteria", event.target.value)
    this.setState({searchName: event.target.value}, () => {
      this.setState({filteredStudents: (this.state.students.filter(student => student.firstName.toLowerCase().includes(this.state.searchName.toLowerCase()) || student.lastName.toLowerCase().includes(this.state.searchName)))});
    });
    console.log('Filtered Students', this.state.searchName, this.state.filteredStudents)
  }

  handleSearchByTag = (event) => {
    console.log("this is the search criteria", event.target.value)
    this.setState({searchTag: event.target.value}, () => {
      if (this.state.searchTag !== '') {
        this.setState({filteredStudents: (this.state.students.filter(student => {
          if (student.tags) {
            for (let i = 0; i < student.tags.length; i++) {
              if(student.tags[i].toLowerCase().includes(this.state.searchTag.toLowerCase())) {
                return true;
                }
              }
              return false;
            }
          }))
        });
      } else {
        this.setState({filteredStudents: this.state.students});
      }
    });
  }

  updateStudent = (index, student) => {
    let newStudents = this.state.students.filter((f) => f.id !== index)
    newStudents.push(student)
    newStudents.sort(function (a, b) {
      return b.id - a.id;
    })
    this.setState({students: newStudents});
  }
  
  render() {
    const {filteredStudents} =  this.state;
    return (
      <div className="main-bg">
        <div className="view-window" id="style-1">
          <SearchByName className="search-bars" handleChange={this.handleSearchByNameChange} searchName={this.state.searchName}/>
          <SearchByTag className="search-bars" handleChange={this.handleSearchByTag} searchTag={this.state.searchTag}/>
          {filteredStudents.map( (student, index) => (
            <Student
            key={student.id}
            student={student}
            allStudents={this.state.students}
            index = {index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
