import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import OffcanvasExample from "./demo";
import Example from "./modal";
const Formmain = (props) => {
  const [val, setValue] = useState("Content will be generated here");
  const saveDataHandler = (enteredData) => {
    const newData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddData(newData);
    if (newData.title !== "") setValue(newData.title);
    else setValue();
  };
  const clearData = () => {
    setValue("Content will be generated here");
  };
  return (
    <div className="">
      <OffcanvasExample></OffcanvasExample>
      <Form>
        <Form.Group>
          <br></br>
          <Example onSaveData={saveDataHandler}></Example>
          <Button variant="flat" className="clear" onClick={clearData}>
            click to clear
          </Button>
        </Form.Group>
        <Form.Group>
          <br></br>
          <Form.Control
            as="textarea"
            id="tarea"
            rows={15}
            value={val}
            readOnly
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};
export default Formmain;
