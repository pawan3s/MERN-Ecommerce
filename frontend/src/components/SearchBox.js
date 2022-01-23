import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search here...'
        className='mr-sm-3 ml-sm-8 search-form'
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-danger'
        style={{
          color: "rgb(110, 159, 250)",
          border: "2px solid rgb(110, 159, 250)",
          borderRadius: "12px",
          padding: "10px 15px",
        }}
      >
        <i className='fas fa-search'></i> search
      </Button>
    </Form>
  );
};

export default SearchBox;
// color: rgb(110, 159, 250);
// border: 2px solid rgb(110, 159, 250);
// border-radius: 12px;
