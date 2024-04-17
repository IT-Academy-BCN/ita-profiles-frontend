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
  studentUUID: string | null
  setStudentUUID: React.Dispatch<React.SetStateAction<string | null>>
  handleStudentClick: (studentId: string) => void
}>({
  students: [],
  studentUUID: null,
  setStudentUUID: () => {},
  handleStudentClick: () => {},
})

interface ContextProviderProps {
  children: ReactNode
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [students, setStudents] = useState<IStudentList[]>([])
  const [studentUUID, setStudentUUID] = useState<string | null>(null)
  const handleStudentClick = (studentId: string) => {
    setStudentUUID(studentId)
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
        studentUUID,
        setStudentUUID,
        handleStudentClick,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context