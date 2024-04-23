import axios from 'axios'

const baseApi = 'https://itaperfils.eurecatacademy.org'

export const getAdditionalTraining = async (studentUUID: string | null) => {
  try {
    const response = await axios.get(
      `${baseApi}/api/v1/students/${studentUUID}/additionaltraining`,
    )

    return response.data.additional_trainings
  } catch (err) {
    throw new Error(`Error fetching additional data`)
  }
}
