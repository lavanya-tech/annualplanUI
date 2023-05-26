import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ViewCategoricalPlan = (props)=>{
    const [categoryPlan,setCategoryPlan] = useState([]);
    const handleEditClick=(row)=>{

    }
    useEffect(()=>{
        fetch('http://localhost:8080/annualplan/type/'+ props.filterCategory)
        .then(response => response.json())
        .then(data => setCategoryPlan(data))
        .catch(error => console.error(error))
    },[categoryPlan])
    return(
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Month</th>
          <th>{props.filterCategory} Description</th>
          <th>Budget Head</th>
          <th>sub Budget Head</th>
          <th>Fund required</th>
          <th>projected Impact</th>
        </tr>
      </thead>
      <tbody>
        {
            categoryPlan.map((row)=>{
                return(<tr>
                    <td>{row["month"]}</td>
                    <td>{row["description"]}</td>
                    <td>{row["budgetHead"]}</td>
                    <td>{row["subBudgetHead"]}</td>
                    <td>{row["fund"]}</td>
                    <td>{row["projectedImpact"]}</td>
                    <td>
                      <Button variant="light" size="sm" onClick={() => handleEditClick(row)}>
                        <FontAwesomeIcon icon={faEdit} size={10} color="black" />
                        
                      </Button>
                    </td>
                    <td>
                      <Button variant="light" size="sm" onClick={() => handleEditClick(row)}>
                      <FontAwesomeIcon icon={faTrashAlt} size="lg" color="black" />
                     </Button>
                    </td>
                </tr>);
            })
        }
      </tbody>
    </Table>
    )                
}

export default ViewCategoricalPlan;