import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget';
import { Container } from 'react-bootstrap';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import InputPlan from './Components/InputPlan';
import ViewPlan from './Components/ViewPlan';
import ViewCalendar from './Components/ViewCalendar';
import Importplan from './Components/Importplan'
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route exact path='/viewcalendar' element={<ViewCalendar/>} />
          <Route exact path='/addplan' element={<InputPlan/>}></Route>
          <Route exact path='/budget' element={<Budget/>}></Route>
          <Route exact path='/viewplan' element={<ViewPlan/>}/>
          <Route exact path='/importplan' element={<Importplan/>}/>
        </Routes>
    </div>
  );
}

export default App;
