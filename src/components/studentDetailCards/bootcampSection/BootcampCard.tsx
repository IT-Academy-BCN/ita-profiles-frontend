import medal from '../../../assets/img/medal-dynamic-color.png'
import { useEffect, useState } from 'react'
import { useStudentIdContext } from '../../../context/StudentIdContext'
import type { TBootcamp } from '../../../interfaces/interfaces'
import axios from 'axios'

const BootcampCard: React.FC = () => {
  const { studentUUID } = useStudentIdContext()

  const [bootcampData, setBootcampData] = useState<TBootcamp[]>([])

  const endpointBootcamp = `https://itaperfils.eurecatacademy.org/api/v1/api/v1/students/${studentUUID}/bootcamp`

  useEffect(() => {
    if (studentUUID) {
      axios
        .get(endpointBootcamp, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          setBootcampData(response.data.bootcamp)
          console.log(bootcampData)
        })
        .catch((error) => {
          console.error(error.message)
        })
    }
  }, [studentUUID, endpointBootcamp])
  console.log(studentUUID)

  return (
    <div className="flex flex-col gap-4" data-testid="BootcampCard">
      <h3 className="text-lg font-bold">Datos del bootcamp</h3>
      <div className="flex items-center gap-1 rounded-md bg-gray-5-background p-5 shadow-[0_4px_0_0_rgba(0,0,0,0.25)]">
        <img src={medal} alt="Medal" className="w-16" />
        {bootcampData.map((bootcamp) => (
          <div key={bootcamp.bootcamp_id} className="flex flex-col">
            <p className="text-xl font-semibold leading-tight text-black-3">
              {bootcamp.bootcamp_name}
            </p>

            <p className="text-base font-semibold text-black-2">
              Finalizado: {bootcamp.bootcamp_end_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default BootcampCard
