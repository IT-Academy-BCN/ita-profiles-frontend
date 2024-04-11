import { IStudentList } from '../interfaces/interfaces'
import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  SetStateAction,
} from 'react'
import { FetchStudentsListHome } from '../api/FetchStudentsList'

export const Context = createContext<{
  students: IStudentList[]
  selectedStudentId: number | null
  setSelectedStudentId: React.Dispatch<React.SetStateAction<number | null>>
  handleStudentClick: (studentId: number) => void // Add this line
}>({
  students: [],
  selectedStudentId: null,
  setSelectedStudentId: () => {},
  handleStudentClick: () => {},
})

interface ContextProviderProps {
  children: ReactNode
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [students, setStudents] = useState<IStudentList[]>([])
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(
    null,
  )
  const handleStudentClick = (studentId: SetStateAction<number | null>) => {
    setSelectedStudentId(studentId)
  }

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const studentsList = await FetchStudentsListHome()
        // Check if studentsList is not undefined before setting the state
        if (studentsList) {
          setStudents(studentsList)
        } else {
          // Handle the undefined case, e.g., by setting an empty array
          setStudents([])
        }
      } catch (error) {
        console.error('Error fetching students:', error)
      }
    }

    fetchStudents()
  }, [])
  return (
    <Context.Provider
      value={{
        students,
        selectedStudentId,
        setSelectedStudentId,
        handleStudentClick,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
