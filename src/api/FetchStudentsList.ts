import axios from 'axios'
import { IStudentList } from '../interfaces/interfaces'
import { List } from 'postcss/lib/list';

// eslint-disable-next-line consistent-return
export const FetchStudentsListHome = async (selectedRoles:Array, selectedTags:Array) => {
  try {
    let queryParams = '';

    // Construir la cadena de consulta para roles seleccionados
    if (selectedRoles.length > 0) {
      queryParams += `specialization=${selectedRoles.join(',')}`;
    }

    // Añadir tags a la cadena de consulta si están presentes
    if (selectedTags.length > 0) {
      queryParams += `${queryParams ? '&' : ''}tags=${selectedTags.join(',')}`;
    }

    // Construir la URL completa con la cadena de consulta
    const url = `https://itaperfils.eurecatacademy.org/api/v1/student/list/for-home${queryParams ? `?${queryParams}` : ''}`;

    const response = await axios.get<IStudentList[]>(url);
    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
}
