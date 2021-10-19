import React, { Component } from 'react';
import { Button, Card, Accordion } from 'react-bootstrap';



class Content extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>The time is {new Date().toLocaleTimeString()}.</h2>
                <br></br>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Accordion #1
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Accordion #2
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>


        );
    }
}

export default Content;