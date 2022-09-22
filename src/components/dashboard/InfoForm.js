import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Row, Col, Card,Toast } from "react-bootstrap";
import DateTimePicker from "./DateTimePicker";
import { addUser } from "../../features/UserSlice";

function InfoForm() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [Cdate, setDate] = useState(new Date().toLocaleDateString('fr-FR'));
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: "",
  });
  const { firstName, lastName, date } = formData;
  const onChanged = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
 const getDate=(date) => {
  const d = new Date(date).toLocaleDateString('fr-FR');
  setFormData((prevState) => ({
    ...prevState,
    date: d,
  }));
}
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log(formData);
      dispatch(addUser(formData));
      setShow(true)
    }
    setValidated(true);
  };

  return (
    <>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg="success">
          <Toast.Header>
          </Toast.Header>
          <Toast.Body>اطلاعات با موفقیت ثبت شد</Toast.Body>
        </Toast>
      <Card>
        <Card.Body className="ps-0 pe-0">
          <div id="right-zoom"></div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom01">
                <Form.Label>
                  نام<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  required
                  value={firstName}
                  name="firstName"
                  onChange={onChanged}
                />
                 <Form.Control.Feedback type="invalid">
           این فیلد نمیتواند خالی باشد!
          </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom02">
                <Form.Label>
                  نام خانوادگی<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  required
                  value={lastName}
                  name="lastName"
                  onChange={onChanged}
                />
                <Form.Control.Feedback type="invalid"> این فیلد نمیتواند خالی باشد!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" as={Col} md="12" controlId="validationDate">
                <Form.Label>
                  تاریخ تولد<span className="text-danger">*</span>
                </Form.Label>
                <DateTimePicker data={date} getDate={getDate}/>
              </Form.Group>
            </Row>
            <Row>
              <div className="d-flex justify-content-start">
                <Button type="submit" variant="success" className="btn-site">
                  ثبت
                </Button>
              </div>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default InfoForm;
