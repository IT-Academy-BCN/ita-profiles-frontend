import axios from 'axios'

const baseApi = 'https://itaperfils.eurecatacademy.org/api/v1'

export const getAdditionalTraining = async (studentUUID: string | null) => {
  try {
    const response = await axios.get(
      `${baseApi}/students/${studentUUID}/additionaltraining`,
    )

    return response.data.additional_trainings
  } catch (err) {
    throw new Error(`Error fetching additional data`)
  }
}
