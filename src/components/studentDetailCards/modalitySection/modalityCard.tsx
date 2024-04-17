import { useEffect, useState } from 'react'
import remoto from '../../../assets/svg/remoto.svg'
import { useStudentIdContext } from '../../../context/StudentIdContext'
import type { TModality } from '../../../interfaces/interfaces'
import axios from 'axios'

const ModalityCard: React.FC = () => {
  const { studentUUID } = useStudentIdContext()
  const [modalityData, setModalityData] = useState<TModality[]>([])
  console.log(studentUUID)

  const endpointModality = `https://itaperfils.eurecatacademy.org/api/v1/modality/${studentUUID}`

  useEffect(() => {
    if (studentUUID) {
      axios
        .get(endpointModality, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          setModalityData(response.data.languages)
        })
        .catch((error) => {
          console.error(error.message)
        })
    }
  }, [studentUUID, endpointModality])

  return (
    <div className="flex flex-col gap-5" data-testid="ModalityCard">
      <h3 className="font-bold text-lg">Modalidad</h3>
      <div className="flex items-center gap-2">
        <img src={remoto} className="pr-2" alt="remoto" />
        {modalityData &&
          modalityData.map((modality) => (
            <ul key={studentUUID} className="flex flex-col">
              <li className="text-sm font-semibold text-black-2">
                {modality.modality}
              </li>
            </ul>
          ))}
      </div>
    </div>
  )
}
export default ModalityCard
