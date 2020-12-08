import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
const FullName = ()=> { 
    return (  
<Form>
<Row>
    <Col>
    <Form.Control placeholder="First name" />
    </Col>
    <Col>
<Form.Control placeholder="Last name" />
    </Col>
</Row>
</Form> );
};
export default FullName;
