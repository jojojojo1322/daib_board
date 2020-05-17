import React from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import axios from "axios";

class BoardText extends React.Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://dauth.daios.net/v1/boards/",
        {
          content: this.state.content,
          nickName: this.state.nickName,
        },
        {
          headers: { "x-access-token": `${localStorage.getItem("token")}` },
        }
      )
      .then((res) => this.props.history.push("/"))
      .catch((err) => alert("다시 입력해주세요"));
  };

  render() {
    return (
      <Container
        style={{
          background: "#fff",
          width: "1200px",
          marginTop: "50px",
          height: "800px",
        }}
      >
        <h1>Board Text</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>글쓰기</Form.Label>

            <Form.Control
              style={{
                marginTop: "20px",
              }}
              placeholder="이름을 입력하십시오."
              name="nickName"
              onChange={this.handleChange}
              size="sm"
              type="text"
            />
            <Form.Control
              style={{
                marginTop: "20px",
              }}
              as="textarea"
              placeholder="내용을 입력해 주세요."
              name="content"
              rows="10"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            style={{
              text_align: "center",
              position: "relative",
            }}
            type="summit"
            size="sm"
          >
            저장
          </Button>
        </Form>
      </Container>
    );
  }
}

export default BoardText;
