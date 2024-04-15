import axios from 'axios'
import { IStudentList } from '../interfaces/interfaces'

export const FetchStudentsListHome = async (students: string) => {
    try {
     const response = await axios.get<IStudentList[]>(`https://itaperfils.eurecatacademy.org/api/v1/student/list/for-home?specialization=${students}`);
      return response.data

    } catch (e) {
   /*    console.error(e); */
      return null;
    }
  };