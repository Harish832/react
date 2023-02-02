import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Example = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(
    "Content will be generated here"
  );
  const [enteredNote, setEnteredNote] = useState("");
  const titleChangeHandler = (event) => {
    if (event.target.value === "") {
      setEnteredTitle("Content will be generated here");
    } else setEnteredTitle(event.target.value);
  };
  const noteChangeHandler = (event) => {
    setEnteredNote(event.target.value);
  };
  const [show, setShow] = useState(false);
  const handleClose = (event) => {
    if (enteredTitle === "") {
      setEnteredTitle("Content will be generated here");
      event.preventDefault();
      const newData = {
        title: "Content will be generated here",
        note: enteredNote,
      };
      props.onSaveData(newData);
      setShow(false);
    } else {
      event.preventDefault();
      const newData = {
        title: enteredTitle,
        note: enteredNote,
      };
      props.onSaveData(newData);
      setShow(false);
    }
  };
  const handleShow = () => setShow(true);
  const handlexClose = () => setShow(false);

  return (
    <>
      <Button variant="flat" onClick={handleShow}>
        Let's Begin
      </Button>

      <Modal
        centered="true"
        show={show}
        onHide={handlexClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal"
      >
        <div>
          <Modal.Header closeButton>
            <Modal.Title className="title" value={enteredTitle}>
              Fetch Me
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleClose}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title of the Context:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Title here"
                  onChange={titleChangeHandler}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Notes:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  onChange={noteChangeHandler}
                />
              </Form.Group>
              <Form.Group className="gene">
                <Button variant="primary" type="submit" id="generate">
                  Generate
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default Example;
