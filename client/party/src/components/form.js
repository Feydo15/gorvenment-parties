import React, { useState } from "react";
import axios from "axios";

function PostForm() {

  const url = "http://localhost:5000/parties";

  const [formData, setFormData] = useState({});
  
  
  const handleSubmit = (e) => {
e.preventDefault();
axios.post(url,{
    title: formData.title,
    date: formData.date,
    leader: formData.leader,
    members: formData.members
}).then(response => {
    console.log(response.formData)
});
}

  const handleChange = (e) => {
    const newData = {...formData}
    newData[e.target.id]=e.target.value;
    setFormData(newData);
    console.log(newData);
  };


  return (
    <div>
      <form action="/parties" method="POST" onSubmit={(e) => handleSubmit(e)}>
        <label for="title">Party title:</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          id="title"
          value={formData.title}
          name="title"
          required
        />
        <label for="date">Start Date</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          id="date"
          value={formData.date}
          name="date"
          required
        />
        <label for="leader">Party Leader</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          id="leader"
          value={formData.leader}
          name="leader"
          required
        />
        <label for="members">Members</label>
        <input
          type="number"
          onChange={(e) => handleChange(e)}
          id="members"
          value={formData.members}
          name="members"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
