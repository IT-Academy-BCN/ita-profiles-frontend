import axios from "axios"

// we receive the student id from the ProjectsCard.tsx 
export const getStudentProjects = async (studentUUID: string | null) => {
    try {
        const response = await axios.get(`https://itaperfils.eurecatacademy.org/api/v1/students/${studentUUID}/projects`);
        
        return response.data.projects;
    } catch (error) {
        throw new Error("RIP");
    }
};



  
