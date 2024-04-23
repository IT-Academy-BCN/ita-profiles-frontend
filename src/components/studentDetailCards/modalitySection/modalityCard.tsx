import { useEffect, useState } from 'react'
import remoto from '../../../assets/svg/remoto.svg'
import { useStudentIdContext } from '../../../context/StudentIdContext'
import axios from 'axios'
import type { TModality } from '../../../interfaces/interfaces'

const ModalityCard: React.FC = () => {
  const { studentUUID } = useStudentIdContext()
  const [modalityData, setModalityData] = useState<TModality>({ modality: [] })

  const endpointModality = `https://itaperfils.eurecatacademy.org/api/v1/modality/${studentUUID}`

  useEffect(() => {
    if (studentUUID) {
      axios
        .get<TModality>(endpointModality)
        .then((response) => {
          setModalityData(response.data)
          console.log(modalityData)
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
        {modalityData.modality.map((modality, index) => (
          <p key={index} className="flex flex-col">
            {modality}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ModalityCard
