import axios from "axios";
import { IStudentList } from "../interfaces/interfaces";

export const FetchStudentsListHome = async () => {
    try {
      const response = await axios.get<IStudentList[]>("https://itaperfils.eurecatacademy.org/api/v1/student/list/for-home");
      return response.data

    } catch (e) {
      console.error(e);
    }
  };