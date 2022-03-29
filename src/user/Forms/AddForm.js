import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Container, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import NavBar from '../../components/UI/NavBar/NavBar';
import { withRouter } from "react-router";
import { closeForm } from '../../utils/CloseForm';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const options = [
  { value: 'technology', label: 'technology' },
  { value: 'hackideas', label: 'hackideas' },
  { value: 'letshack', label: 'letshack' },
  { value: 'hackathon', label: 'hackathon' },
  {value:'scripboxhackathon2022',label:'scripboxhackathon2022'}
]

function AddForm() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [selectedtags, setTags] = useState('');
  const [user, setUser] = useState('')
  const [date, setDate] = useState(new Date());
  const [selectedtags, setTags] = useState([]);

  const onChangeTags = (event) => {
    setTags(event);
  }

  useEffect(() => {
    const currUser = localStorage.getItem('currentUser');
    setUser(currUser);
  }, [])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  };

  const onChangeDescription = event => {
    setDescription(event.target.value,
    );
  };

  const isInputFieldEmpty = () => {
    return (
      title === '' ||
      description === '' ||
      selectedtags === null
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hackIdeas = localStorage.getItem('hackIdeas') != null ? JSON.parse(localStorage.getItem('hackIdeas')) : [];
    const newIdea = {
      id: hackIdeas.length + 1,
      title,
      description,
      selectedtags,
      votes: 0,
      createdDate: date,
      createdUser: user,
    };
    hackIdeas.push(newIdea);
    localStorage.setItem('hackIdeas', JSON.stringify(hackIdeas));
    setTags([]);
    setTitle('');
    setDescription('');
    toast('Successfully created a challenge');
  };

  return (
    <Wrapper>
      <ToastContainer />
      <NavBar user={user} />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <H6 className='addform'>
              Please fill out the form to add an hack idea and then click
              the submit button.
            </H6>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <Card>
              <StyledCardHeader>Add Idea</StyledCardHeader>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="addName">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="Please enter the title"
                      value={title}
                      onChange={onChangeTitle}
                    />
                  </Form.Group>
                  <Form.Group controlId="addProfession">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="description"
                      placeholder="Please enter the description"
                      value={description}
                      onChange={onChangeDescription}
                    />
                  </Form.Group>
                  <Form.Group controlId="addColor">
                    <Form.Label>Tags</Form.Label>
                    <Select isMulti options={options} onChange={onChangeTags} />
                  </Form.Group>
                  <Form.Group controlId="addColor">
                    <Form.Label>Date</Form.Label>

                    <DatePicker dateFormat="dd-MM-yyyy" selected={date} onChange={date => setDate(date)} />

                  </Form.Group>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => closeForm()}
                  >
                    Cancel
                  </Button>
                  <StyledButton
                    className="style-button"
                    size="sm"
                    type="submit"
                    disabled={isInputFieldEmpty()}
                  >
                    Submit
                  </StyledButton>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 0px;
`;

const H6 = styled.h6`
  margin-bottom: 10px;
  margin-top:30px;
  color: #858484;
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: #3277b2;
  color: #ffffff;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  margin-left: 5px;
`;

export default withRouter(AddForm);
