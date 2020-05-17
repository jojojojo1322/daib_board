import React from "react";
import { Table, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

class Board extends React.Component {
  state = {
    boards: [],
  };

  async componentWillMount() {
    try {
      const res = await fetch("http://dauth.daios.net/v1/boards", {
        headers: { "x-access-token": `${localStorage.getItem("token")}` },
      });

      const boards = await res.json();
      this.setState({ boards: boards.data });
    } catch (e) {
      alert("데이터 조회에 실패했습니다.");
    }
  }

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
        <Table striped>
          <thead>
            <tr>
              <th>id</th>
              <th>작성자</th>
              <th>내용</th>
              <th>날짜</th>
              <th>버전정보</th>
            </tr>
          </thead>
          {this.state.boards
            ? this.state.boards.map((board) => {
                return (
                  <tbody key={board._id}>
                    <tr>
                      <td>{board._id}</td>
                      <td>{board.nickName}</td>
                      <td>{board.content}</td>
                      <td>{board.createdAt}</td>
                      <td>{board.__v}</td>
                    </tr>
                  </tbody>
                );
              })
            : ""}
        </Table>
        <Button
          style={{
            text_align: "center",
            position: "absolute",
            left: "850px",
            marginTop: "8px",
          }}
          href="#/BoardText"
        >
          글쓰기
        </Button>
      </Container>
    );
  }
}

export default Board;
