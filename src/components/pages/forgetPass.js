import React from 'react'
import { Container, Row,Col,Form, Button } from 'react-bootstrap'
import  propTypes  from 'prop-types'
const ForgetPass = ({ handleOnChange , handleOnResetSubmit,formSwitcher, email  }) => {
    
  return (
<Container>
    <Row>
        <Col>
        <h1>
Forget Password   
     </h1>
        <br />
        <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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
            <Button type='submit'>send email</Button>
        </Form>
        </Col>
    </Row><br />
    
    <Row> 
        <Col>
        <a href='#!' onClick={() =>formSwitcher('login')}> Login now</a>
        </Col>
    </Row>
</Container>
  )
}
ForgetPass.propTypes = {
    handleOnChange: propTypes.func.isRequired,
    handleOnResetSubmit: propTypes.func.isRequired,
    formSwitcher: propTypes.func.isRequired,
    email: propTypes.string.isRequired,
};
export default ForgetPass
