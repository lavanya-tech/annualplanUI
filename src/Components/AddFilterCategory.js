import React from "react";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const AddFilterCategory = (props) => {
    const update = (event) => {
        props.setFilterCategory(event.target.value);
      }    
      return (
          <Container bg="dark" className="justify-content-right mb-3">
            <Form.Select value={props.filterCategory} onChange={update}>
                <option value="All">all</option>
                <option value="Activity">Activity</option>
                <option value="Improvement">Improvement</option>
                <option value="Function">Function</option>
                <option value="Expansion">Expansion</option>
                <option value="Procurement">Procurement</option>
            </Form.Select>
          </Container>
        );
}

export default AddFilterCategory;