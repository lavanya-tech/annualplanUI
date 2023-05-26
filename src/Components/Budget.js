import React, { useState, useEffect} from "react";
import { Table } from "react-bootstrap";
import './budget.css';
const arr = [0,1];
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
const Budget= ()=>{
  const [budgetPlan,setBudgetPlan] = useState([
    {
      "quarter1":0,
      "quarter2":0,
      "quarter3":0,
      "quarter4":0
    },
    {
      "quarter1":0,
      "quarter2":0,
      "quarter3":0,
      "quarter4":0
    }
  ]);
  useEffect(()=>{
      fetch('http://localhost:8080/budgetplan')
      .then(response => response.json())
      .then(data => setBudgetPlan(data))
      .catch(error => console.error(error))
  },[budgetPlan])

    return(
       <div className="scrollable-div"><Table striped bordered hover size="sm">
      <thead className="table-header">
        <tr>
          <th>Quarter</th>
          {
            budget_heads.map((bh,ind)=>{
                return(
                    <th colSpan={sub_budget_heads[ind].length}>{bh[0]}</th>
                )
            })
          }
        </tr>
        <tr>
        <th></th>
        {
            budget_heads.map((bh,ind)=>{
                return(
                    <th colSpan={sub_budget_heads[ind].length} style={{fontSize:"90%"}}>{bh[1]}</th>
                )
            })
          }
        </tr>
        <tr>
            <th></th>
            {
            sub_budget_heads.map((sbh)=>{
                return(
                    sbh.map((csbh)=>{
                        return(
                            <th style={{fontSize:"80%"}}>{csbh}</th>
                        )
                    })
                )
            })
          }
        </tr>
      </thead>
      <tbody  className="table-body">
         <tr>
            <td>Q1 (APR - JUN)</td>
            {
              arr.map((ind)=>{
                return(
                  <td>{budgetPlan[ind]["quarter1"]}</td>
                )
              })
            }
        </tr> 
        <tr>
          <td>Q2 (JUL - AUG)</td>
          {
              arr.map((ind)=>{
                return(
                  <td>{budgetPlan[ind]["quarter2"]}</td>
                )
              })
            }
        </tr>
        <tr>
          <td>Q3 (SEP - NOV)</td>
          {
              arr.map((ind)=>{
                return(
                  <td>{budgetPlan[ind]["quarter3"]}</td>
                )
              })
            }
        </tr>
        <tr>
          <td>Q4 (DEC - FEB)</td>
          {
              arr.map((ind)=>{
                return(
                  <td>{budgetPlan[ind]["quarter4"]}</td>
                )
              })
            }
        </tr> 
      </tbody>
    </Table></div>
    )                
}

export default Budget;


