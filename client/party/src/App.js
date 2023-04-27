import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom"
import PostForm from "./components/form";
import Display from "./components/display";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

function App() {

  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api")
      .then((response) => {
        const data = response.data;
        setBackendData(data);
        console.log(data, "data is received");
      })
      .catch((error) => {
        console.log(error, "error is received");
      });
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/parties/${id}`
     axios.delete(url)
     .then(response => {
      const result = response.data;
      const { status, message } = result;
      if (status !== 'SUCCESS') {
          alert(message, status)
      }
      else {
          alert(message)
          window.location.reload()
      }
  })
  .catch(err => {
      console.log(err)
  })
 }
  





  return (
    <div> 
      <BrowserRouter>
         <Routes>
         <Route path="/" element={<Display backendData={ backendData } handleDelete={ handleDelete} />} />
         <Route path="/form" element={ <PostForm />} />
         </Routes>
         </BrowserRouter>
      
    </div>
  );
}

export default App;
