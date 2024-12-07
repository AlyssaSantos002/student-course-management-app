import React from 'react';
import AddCourse from '../Course/AddCourse';
import AddStudent from '../Student/AddStudent';
import StudentList from '../Student/Studentlist';
import CourseList from '../Course/CourseList';
import FetchStudentById from '../Student/Fetch_Update_Student';
import FetchCourseById from '../Course/Fetch_Update_Course';
import Logout from '../User/Logout';

const Home = () => {
    return (
        <>
            <div className='logout1'>
                <Logout />
            </div>
            <div className="home">
                <h1>Course Managemnet</h1>
                <div className="container1">
                    <AddCourse />
                    <CourseList />
                    <FetchCourseById />
                </div>
                <h1>Student Managemnet</h1>
                <div className='container2'>
                    <AddStudent />
                    <StudentList />
                    <FetchStudentById />
                </div>
            </div>
        </>
    )
}

export default Home;