import axios from 'axios'
import { useContext } from "react"
import Context from "../context/Context"


const { studentUUID } = useContext(Context)

 export const fetchModalityData = async () => {
        try {
          const response = await axios.get(
            `https://itaperfils.eurecatacademy.org/api/v1/modality/${studentUUID}`,
          )
          return response.data
        } catch (error) {
          console.error('Error fetching modality data:', error)
        }
     }
