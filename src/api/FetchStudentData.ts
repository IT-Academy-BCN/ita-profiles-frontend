import axios from "axios";
import { IStudentData } from "../interfaces/interfaces";

export const FetchStudentsData = async () => {
    try {
      const response = await axios.get<IStudentData[]>("https://itaperfils.eurecatacademy.org/api/v1/student/list/for-home");
      return response.data
      console.log(response.data)

    } catch (e) {
      console.error(e);
    }
  };
