import remoto from '../../../assets/svg/remoto.svg'
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Context from '../../../context/Context'

const ModalityCard = () => {
  const { selectedStudentId } = useContext(Context)

  // State to store the modality data
  const [modalityData, setModalityData] = useState(null)

  // Effect hook to make an API call when selectedStudentId changes
  useEffect(() => {
    if (selectedStudentId) {
      const fetchModalityData = async () => {
        try {
          const response = await axios.get(
            `https://itaperfils.eurecatacademy.org/api/v1/modality/${selectedStudentId}`,
          )
          setModalityData(response.data)
        } catch (error) {
          console.error('Error fetching modality data:', error)
        }
      }

      fetchModalityData()
    }
  }, [selectedStudentId])
  console.log(selectedStudentId)

  // Render the modality data or a loading state
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-bold text-lg">Modalidad</h3>
      <div className="flex items-center gap-2">
        <img src={remoto} className="pr-2" alt="remoto" />

        <p className="text-sm font-semibold leading-tight text-black-2">
          {modalityData ? (
            <div>{/* Render your modality data here */}</div>
          ) : (
            <p>Loading modality data...</p>
          )}
        </p>
      </div>
    </div>
  )
}

export default ModalityCard
