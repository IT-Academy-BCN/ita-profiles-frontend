import axios from "axios";
import { IStudentList } from "../interfaces/interfaces";

export const FetchStudentsListHome = async (students: string) => {
  console.log('STUDENTSSS',students);
    try {
     // const response = await axios.get<IStudentList[]>("https://itaperfils.eurecatacademy.org/api/v1/student/list/for-home");
     const response = await axios.get<IStudentList[]>("https://itaperfils.eurecatacademy.org/api/v1/student/list/for-home?specialization="+students);
      return response.data

    } catch (e) {
      console.error(e);
    }
  };