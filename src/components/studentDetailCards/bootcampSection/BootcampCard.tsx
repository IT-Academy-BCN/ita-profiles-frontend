import { useEffect, useState } from 'react'
import medal from '../../../assets/img/medal-dynamic-color.png'
import { useStudentIdContext } from '../../../context/StudentIdContext'
import type { TBootcamp } from '../../../interfaces/interfaces'
import { fetchBootcampData } from '../../../api/FetchStudentBootcamp'

const BootcampCard: React.FC = () => {
  const { studentUUID } = useStudentIdContext()

  const [bootcampData, setBootcampData] = useState<TBootcamp | null>(null)

  useEffect(() => {
    const fetchBootcamp = async () => {
      if (studentUUID) {
        const data = await fetchBootcampData(studentUUID)
        setBootcampData(data)
      }
    }
    fetchBootcamp()
  }, [studentUUID])

  return (
    <div className="flex flex-col gap-4" data-testid="BootcampCard">
      <h3 className="text-lg font-bold">Datos del bootcamp</h3>
      <div className="flex items-center gap-1 rounded-md bg-gray-5-background p-5 shadow-[0_4px_0_0_rgba(0,0,0,0.25)]">
        <img src={medal} alt="Medal" className="w-16" />

        {bootcampData && (
          <div key={bootcampData.bootcamp_id} className="flex flex-col gap-1">
            <p className="text-xl  font-semibold leading-tight text-black-3">
              {bootcampData.bootcamp_name}
            </p>
            <p className="text-base font-medium text-black-2">
              Finalizado: {bootcampData.bootcamp_end_date}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
export default BootcampCard
