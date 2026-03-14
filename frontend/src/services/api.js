import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:8080", // now API has this link stored
});

export const getEmployees   =  ()         => API.get("/employee"); // arrow function to avoid running while compiling itself

export const createEmployee =  (data)     => API.post("/employee", data);

export const deleteEmployee =  (id)       => API.delete(`/employee${id}`);
//attendance
export const markAttendance =  (id, data) => API.put(`/attendance${id}`, data);

export const getAttendance =   (id)       => API.get(`/attendance/${id}`);
