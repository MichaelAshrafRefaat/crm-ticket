import React from 'react'
import { Container, Row,Col,Form, Button } from 'react-bootstrap'
import  propTypes  from 'prop-types'
const LoginForm = ({ handleOnChange , handleOnSubmit, formSwitcher,email , pass }) => {
    
  return (
<Container>
    <Row>
        <Col>
        <h1>
            Login Page
        </h1>
        <br />
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
              type="email"
              placeholder="Enter email address"
              name="email"
              value={email}
              onChange={handleOnChange}
              required
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
              type="password"
              placeholder="Enter password"
              value={pass}
              onChange={handleOnChange}
              name="password"
              required
              />
            </Form.Group>
            <br />
            <Button type='submit'>Login</Button>
        </Form>
        </Col>
    </Row><br />
    
    <Row> 
        <Col>
        <a href='#!' onClick={() =>formSwitcher('reset')}> forget Password ?</a>
        </Col>
    </Row>
</Container>
  )
}
LoginForm.propTypes = {
    handleOnChange: propTypes.func.isRequired,
    handleOnSubmit: propTypes.func.isRequired,
    formSwitcher: propTypes.func.isRequired,
    email: propTypes.string.isRequired,
    pass: propTypes.string.isRequired

};
export default LoginForm
