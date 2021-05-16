import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const UpdatePassword = () => {
  const [currentpassword, setCurrentPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmNewpassword, setConfirmNewPassword] = useState("");

  const submitHandler = (event) => {
    console.log("submit button clicked");
    event.preventDefault();
  };

  return (
    <Container fluid className="update-password-body py-5">
      <Row className="update-password-row px-5">
        <Col
          xs={12}
          sm={8}
          md={6}
          lg={4}
          className="offset-sm-2 offset-md-3 offset-lg-4 update-password-col px-0"
        >
          <Col xs={12} className="update-password-title-container py-2">
            <h5 className="my-0 update-password-title">Update Password</h5>
          </Col>
          <Col xs={12} className="py-2 px-2" >
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="updateFormCurrentPassword" className="update-password-form-group">
                <Form.Label className="my-0">Current Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Current Password"
                  value={currentpassword}
                  onChange={(e) => {
                    setCurrentPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="updateFormNewPassword" className="update-password-form-group">
                <Form.Label className="my-0">New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter New Password"
                  value={newpassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="updateFormConfirmNewPassword" className="update-password-form-group">
                <Form.Label className="my-0">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Retype the New Password"
                  value={confirmNewpassword}
                  onChange={(e) => {
                    setConfirmNewPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Button variant="update-password" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdatePassword;
