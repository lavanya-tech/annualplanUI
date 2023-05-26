import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './inputPlan.css';
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const budget_heads = [
    ["BH01","Centre Operation"],
    ["BH02","Centre Development"],
    ["BH03","Child Development"],
    ["BH04","Community Development"],
    ["BH05","New"],
    ["BH06","Fund raiser events"],
    ["BH07","Legal and Statutory"],
    ["BH08","Outreach"],
    ["BH09","HR"],
    ["BH10","Administrative"],
    ["BH11","Library Operations"],
    ["BH12","Skill Development"],
    ["BH13","Women Empowerment"],
    ["BH14","Research and Development"],
    ["BH15","Project Management"],
    ["BH16","Disaster Relief"],
    ["BH17","Emergency/Contigency Fund"]
];
const sub_budget_heads = [
    ["Teacher Salary/Allowances","Books &  Stationary","Rental Charges","Misc"],
    ["Establishment Cost","Electrical works & Appliances","Beautification & Advancement"],
    ["Sports Activities","Cultural Activities","Career Development","Nutritional  drives","Counseling & Immunization"],
    ["Fellowship/ Capacity Building","Health, Enviornment & sanitation","Protection of child abuse drives","Other Social issues awareness"],
    ["New Zonal/Project/Center Expansion"],
    ["Online Fundraiser cost","Fund raiser events"],
    ["Legal and Statutory"],
    ["Social & other Media","PR events/material"],
    ["Hiring","Training","Employee Benefit"],
    ["Employees salary","Rental Charges","Meetings & Travels","Misc Office expenditure"],
    ["Establishment cost","Books & Magazines","Librarian's Salary","Rental Charges"],
    ["Establishment cost","Material","Trainer's Salary","Trainees / Beneficiary Stipend","Rental Charges"],
    ["Menstrual Hygene","Other Empowerment Drive"],
    ["Development (Tech & Others)","Research"],
    ["Planning","Monitoring","Assessment"],
    ["Disaster Relief"],
    ["Emergency/Contigency Fund"]
];
const handleSubmit= async (e) => {
    let res = await fetch("http://localhost:8080/annualplan", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
        month: e.target[0].value,
        type: e.target[1].value,
        description: e.target[2].value,
        budgetHead: budget_heads[e.target[3].value][0],
        subBudgetHead: e.target[4].value,
        fund: e.target[5].value,
        projectedImpact: e.target[6].value,
        date: null
        }),
    });
}
function InputPlan() {
    const [subBudgetHead,setSubBudgetHead] = useState(sub_budget_heads[0]);
    const handleChange = (event) => {
        setSubBudgetHead(sub_budget_heads[event.target.value]);
      };
  return (
    <Container className='form-container'>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mt-5 mb-3">
        <Form.Label>Month</Form.Label>
        <Form.Select className="mb-3" aria-label="Month" required>
        <option value="0">January</option>
        <option value="1">February</option>
        <option value="2">March</option>
        <option value="3">April</option>
        <option value="4">May</option>
        <option value="5">June</option>
        <option value="6">July</option>
        <option value="7">August</option>
        <option value="8">September</option>
        <option value="9">October</option>
        <option value="10">November</option>
        <option value="11">Decemeber</option>
        </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Event Type</Form.Label>
        <Form.Select className="mb-3" aria-label="Event Type" required>
        <option value="Activity">Activity</option>
        <option value="Improvement">Improvement</option>
        <option value="Function">Function</option>
        <option value="Expansion">Expansion</option>
        <option value="Procurement">Procurement</option>
        </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicDescription" required>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Event Details" />
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Budget Head</Form.Label>
        <Form.Select className="mb-3" aria-label="Budget Head" onChange={handleChange} required>
        {
        budget_heads.map((item)=>{
            return(<option value={budget_heads.indexOf(item)}>{item[0]} - {item[1]}</option>)
        }) 
        }
        </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Sub Budget Head</Form.Label>
        <Form.Select className="mb-3" aria-label="Sub Budget Head" required>
        {
        subBudgetHead.map((item)=>{
            return(<option value={item}>{item}</option>)
        }) 
        }
        </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicFund">
        <Form.Label>Requisite Fund</Form.Label>
        <Form.Control type="number" placeholder="Event Amount" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicImpact">
        <Form.Label>Projected Impact</Form.Label>
        <Form.Control type="text" placeholder="Describe the impact" />
    </Form.Group>

    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default InputPlan;