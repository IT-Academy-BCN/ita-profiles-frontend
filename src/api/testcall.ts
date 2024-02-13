import axios from "axios";

export const fetchCall = async () => {
    try {
      const response = await axios.get("https://itaperfils.eurecatacademy.org/api/v1/student/list/for-home",
     {
      headers: {
          'Content-Type': 'application/json',
      }});
      console.log("the response",response);

    } catch (e) {
      console.error(e);
    }
  };