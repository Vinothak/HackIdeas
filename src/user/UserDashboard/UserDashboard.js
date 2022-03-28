/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
//import axios from 'axios';
import { withRouter  } from 'react-router-dom';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import TableTemplate from '../../components/Tables/TableTemplate';
import NavBar from '../../components/UI/NavBar/NavBar';
//const url = 'http://localhost:8080/api/employees';

class UserDashboard extends React.Component {

  constructor(props){
    super(props);
  this.state = {
    ideas: [],
    filterValue: '',
    filterIdeas: [],
    loggedInUser: ' ',
  }
  }
  componentDidMount = () => {

      const currideas=localStorage.getItem('hackIdeas')!=null?JSON.parse(localStorage.getItem('hackIdeas')):[];
      const currentUser=localStorage.getItem('currentUser')!=null?localStorage.getItem('currentUser'):'UnknownUser';
      this.setState({
        ideas:currideas,
        loggedInUser:currentUser             
      });
  };

  deleteIdea(id) {
    const confirmDelete = window.confirm('Delete hack idea forever?');
    if (confirmDelete) {
      this.setState({
        ideas: this.state.ideas.filter(idea => idea.id !== id),
      },()=>{
        localStorage.setItem('hackIdeas',JSON.stringify(this.state.ideas));
      });
     
    }
  }

  upVote(id) {

     
     //deep clone of ideas array.
   const tempIdeas= JSON.parse(JSON.stringify(this.state.ideas)); 
   
        //Find index of specific object using findIndex method.  
const objIndex = tempIdeas.findIndex((obj => obj.id == id));

//Log object to Console.
console.log("Before update: ", tempIdeas[objIndex])

//Update object's name property.
tempIdeas[objIndex].votes = tempIdeas[objIndex].votes + 1;

//Log object to console again.
console.log("After update: ", tempIdeas[objIndex])

      this.setState({
        ideas: tempIdeas
      },()=>{
        localStorage.setItem('hackIdeas',JSON.stringify(this.state.ideas));
      });
  }

  openAddFormHandler = () => {
    this.props.history.push({
      pathname: '/add'
  });
  };

  changeHandler = prop => this.setState({ [prop.name]: prop.value });

  render() {
    const { ideas, filterValue, filterIdeas } = this.state;
    const filteredIdeas = !filterValue ? ideas : filterIdeas;
    // filterValue === '' ? employees : filterEmployees;

    return (
      <div>
            <NavBar  user={this.state.loggedInUser} />
        <SearchBar
          value={filterValue}
          ideas={ideas}
          changeHandler={this.changeHandler.bind(this)}
        />
        <Container>
          <Row>
            <Col xs={5} sm={5}>
              <Button
                variant="primary"
                size="sm"
                onClick={this.openAddFormHandler.bind(this)}
              >
                Add Idea
              </Button>
            </Col>
            <Col xs={7} sm={7}>
              <H1>hackathon Ideas </H1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} className="text-center">
              <TableTemplate
                filteredIdeas={filteredIdeas}
                deleteIdea={this.deleteIdea.bind(this)}
                upVote={this.upVote.bind(this)}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const H1 = styled.h1`
  font-size: 2em;
`;

export default withRouter(UserDashboard);
