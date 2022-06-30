import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const StudentDetails = () => {
    const { id } = useParams();
    const { data: student, error, isPending } = useFetch('http://localhost:8000/students/' + id);

    return (
        <div className="student-details">
            {error && <div> { error } </div>}
            {isPending && <div>Loading...</div>}
            {student && (
                <article>
                    <h2>Student Details</h2>
                    <p>ID No.: { student.id }</p>
                    <p>Name: { student.name }</p>
                    <p>Age: { student.age }</p>
                </article>
            )}          
        </div>
    );
}
 
export default StudentDetails;