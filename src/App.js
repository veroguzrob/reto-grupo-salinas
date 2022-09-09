import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles/App.css';
import Home from './Components/Home';
import EditForm from "./Components/EditForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:idEdit" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
