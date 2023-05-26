import React from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
const Importplan = () => {
    return (
        <Container style={{ paddingTop: '80px' }}>
            <h1>Upload Annual Plan excel sheet</h1>
        <form style={{ paddingTop: '40px' }} action="/upload" method="post" encType="multipart/form-data">
        <input type="file" name="file" id="file" />
        <input type="submit" value="Upload" />
        </form>
        </Container>
    );
}
export default Importplan;