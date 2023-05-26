import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ViewCompletePlan = ()=>{
    const [plan,setPlan] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleEditClick = (row) => {
        setSelectedRow(row);
        setIsModalOpen(true);
      };
    
      const handleDeleteClick = (row) => {
        setSelectedRow(row);
        setIsModalOpen(true);
      };
    useEffect(()=>{
        fetch('http://localhost:8080/annualplan')
        .then(response => response.json())
        .then(data => setPlan(data))
        .catch(error => console.error(error))
    },[])
    return(
      <div>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Month</th>
          <th>Event Type</th>
          <th>Description</th>
          <th>Budget Head</th>
          <th>sub Budget Head</th>
          <th>Fund required</th>
          <th>projected Impact</th>
        </tr>
      </thead>
      <tbody>
        {
            plan.map((row)=>{
                return(<tr>
                    <td>{row["month"]}</td>
                    <td>{row["type"]}</td>
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
                      <Button variant="light" size="sm" onClick={() => handleDeleteClick(row)}>
                      <FontAwesomeIcon icon={faTrashAlt} size="lg" color="black" />
                     </Button>
                    </td>
                </tr>);
            })
        }
      </tbody>
    </Table>
    </div>
    )                
}

export default ViewCompletePlan;