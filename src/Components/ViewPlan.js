import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import AddFilterCategory from "./AddFilterCategory";
import ViewCompletePlan from "./ViewCompletePlan";
import { Container } from "react-bootstrap";
import ViewCategoricalPlan from "./ViewCategoricalPlan";

const ViewPlan = ()=>{
    const [filterCategory,setFilterCategory] = useState("All");
    if(filterCategory === "All")
    {
        return(
            <Container style={{ paddingTop: '80px' }}>
            <AddFilterCategory filterCategory={filterCategory} setFilterCategory={setFilterCategory}></AddFilterCategory>
            <ViewCompletePlan></ViewCompletePlan>
            </Container>
        )  
    }
    else
    {
    return(
        <Container style={{ paddingTop: '80px' }}>
        <AddFilterCategory filterCategory={filterCategory} setFilterCategory={setFilterCategory}></AddFilterCategory>
        <ViewCategoricalPlan filterCategory={filterCategory}></ViewCategoricalPlan></Container>
    )   
    }    
}

export default ViewPlan;