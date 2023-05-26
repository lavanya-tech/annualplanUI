import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { Container, Form, Modal, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

const budget_heads = [
  ["BH01", "Centre Operation"],
  ["BH02", "Centre Development"],
  ["BH03", "Child Development"],
  ["BH04", "Community Development"],
  ["BH05", "New"],
  ["BH06", "Fund raiser events"],
  ["BH07", "Legal and Statutory"],
  ["BH08", "Outreach"],
  ["BH09", "HR"],
  ["BH10", "Administrative"],
  ["BH11", "Library Operations"],
  ["BH12", "Skill Development"],
  ["BH13", "Women Empowerment"],
  ["BH14", "Research and Development"],
  ["BH15", "Project Management"],
  ["BH16", "Disaster Relief"],
  ["BH17", "Emergency/Contigency Fund"],
];
const sub_budget_heads = [
  [
    "Teacher Salary/Allowances",
    "Books &  Stationary",
    "Rental Charges",
    "Misc",
  ],
  [
    "Establishment Cost",
    "Electrical works & Appliances",
    "Beautification & Advancement",
  ],
  [
    "Sports Activities",
    "Cultural Activities",
    "Career Development",
    "Nutritional  drives",
    "Counseling & Immunization",
  ],
  [
    "Fellowship/ Capacity Building",
    "Health, Enviornment & sanitation",
    "Protection of child abuse drives",
    "Other Social issues awareness",
  ],
  ["New Zonal/Project/Center Expansion"],
  ["Online Fundraiser cost", "Fund raiser events"],
  ["Legal and Statutory"],
  ["Social & other Media", "PR events/material"],
  ["Hiring", "Training", "Employee Benefit"],
  [
    "Employees salary",
    "Rental Charges",
    "Meetings & Travels",
    "Misc Office expenditure",
  ],
  [
    "Establishment cost",
    "Books & Magazines",
    "Librarian's Salary",
    "Rental Charges",
  ],
  [
    "Establishment cost",
    "Material",
    "Trainer's Salary",
    "Trainees / Beneficiary Stipend",
    "Rental Charges",
  ],
  ["Menstrual Hygene", "Other Empowerment Drive"],
  ["Development (Tech & Others)", "Research"],
  ["Planning", "Monitoring", "Assessment"],
  ["Disaster Relief"],
  ["Emergency/Contigency Fund"],
];
const handleSubmit = async (e) => {
  let res = await fetch("http://localhost:8080/annualplan", {
    headers: {
      "Content-Type": "application/json",
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
      date: null,
    }),
  });
};
const localizer = momentLocalizer(moment);

const ViewCalendar = () => {
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [subBudgetHead, setSubBudgetHead] = useState(sub_budget_heads[0]);

  const [title, setTitle] = useState("");
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [events, setEvents] = useState([
    {
      title: "Foundation Day",
      start: new Date(2023, 4, 12, 0, 0),
      end: new Date(2023, 4, 13, 0, 0),
    },
    {
      title: "Annual Day",
      start: new Date(2023, 8, 19, 0, 0),
      end: new Date(2023, 8, 20, 0, 0),
    },
  ]);
  const handleChange = (event) => {
    setSubBudgetHead(sub_budget_heads[event.target.value]);
  };
  const handleSelectSlot = ({ start, end }) => {
    console.log(start);
    console.log(end);
    setStart(start);
    setEnd(end);
    setShowAddEventModal(true);
  };

  const handleCloseModal = () => {
    setShowAddEventModal(false);
    setEnd("");
    setStart("");
    setTitle("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleStartChange = (event) => {
    setStart(event.target.value);
  };

  const handleEndChange = (event) => {
    setEnd(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = {
      title,
      start: new Date(start),
      end: new Date(end),
    };
    setEvents([...events, newEvent]);
    setTitle("");
    setStart("");
    setEnd("");
    handleCloseModal();
  };
  return (
    <Container style={{ height: "450px", marginTop: "6%" }}>
      <Calendar
        localizer={localizer}
        events={events}
        views={["month", "week"]}
        selectable
        onSelectSlot={handleSelectSlot}
      />
      <Modal show={showAddEventModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="start">
                  <Form.Label>Start:</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    value={moment(start).format("YYYY-MM-DDTHH:mm")}
                    onChange={handleStartChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="end">
                  <Form.Label>End:</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    value={moment(end).format("YYYY-MM-DDTHH:mm")}
                    onChange={handleEndChange}
                  />
                </Form.Group>
              </Col>
            </Row>

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

            <Form.Group
              className="mb-3"
              controlId="formBasicDescription"
              required
            >
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Event Details" />
            </Form.Group>
            <Row>
              <Col>
            <Form.Group className="mb-3">
              <Form.Label>Budget Head</Form.Label>
              <Form.Select
                className="mb-3"
                aria-label="Budget Head"
                onChange={handleChange}
                required
              >
                {budget_heads.map((item) => {
                  return (
                    <option value={budget_heads.indexOf(item)}>
                      {item[0]} - {item[1]}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3">
              <Form.Label>Sub Budget Head</Form.Label>
              <Form.Select
                className="mb-3"
                aria-label="Sub Budget Head"
                required
              >
                {subBudgetHead.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </Form.Select>
            </Form.Group>
            </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicFund">
              <Form.Label>Requisite Fund</Form.Label>
              <Form.Control type="number" placeholder="Event Amount" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImpact">
              <Form.Label>Projected Impact</Form.Label>
              <Form.Control type="text" placeholder="Describe the impact" />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                Add Event
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ViewCalendar;
