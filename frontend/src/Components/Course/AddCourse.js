import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [courses, setCourses] = useState({
    id: '',
    name: '',
    department: '',
    isOpen: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourses({ ...courses, [name]: name === "isOpen" ? e.target.checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/courses', courses)
      .then(response => {
        console.log("Course added:", response.data);
        setCourses({ id: '', name: '', department: '', isOpen: false });
        alert("Course added successfully!")
      })
      .catch(error => console.error("Cannot add Course:", error));
  };

  return (
    <div className='addCourse'>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <input type="text" name="id" placeholder="ID" value={courses.id} onChange={handleChange} required />
          <input type="text" name="name" placeholder="Name" value={courses.name} onChange={handleChange} required />
          <input type="text" name="department" placeholder="Department" value={courses.department} onChange={handleChange} required />
        </div>
        <div className='addCourse-label'>
          <label>
            Open:
            <input type="checkbox" name="isOpen" checked={courses.isOpen} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Add Course</button>
      </form>
    </div >
  );
};

export default AddCourse;