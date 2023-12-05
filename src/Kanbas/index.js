import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import store from "./store"
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "../users/signin";
import Account from "../users/account";
import UserTable from "../users/table";
import SignUp from "../users/signup";

const API_BASE = process.env.REACT_APP_API_BASE;
console.log(API_BASE);

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        _id : {
            $oid: 3249283902843,
        }
    });

    const URL = `${API_BASE}/courses`;

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            ...courses,
            response.data,
        ]);
        setCourse({ name: "" , number: ""});
    };

    const deleteCourse = async (course) => {
        const response = await axios.delete(
            `${URL}/${course}`
        );
        setCourses(courses.filter(
            (c) => c._id.$oid !== course));
    };


    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id.$oid}`, course
        );
        setCourses(
            courses.map((c) => {
                if (c._id.$oid === course._id.$oid) {
                    return course;
                }
                return c;
            })
        );
        setCourse({ name: "", number: "" });
    };

    

    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation />
                <div>
                    <Routes>
                    <Route path="/Login" element={<Signin />} />
                    <Route path="/Users" element={<UserTable />} />
                    <Route path="/Signup" element={<SignUp />} />
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Dashboard" element=
                            {<Dashboard courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse} />} />
                        <Route path="/account" element={<Account/>}/>
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
};

export default Kanbas