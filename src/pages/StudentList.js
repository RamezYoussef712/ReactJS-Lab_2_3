import { Link } from "react-router-dom";

const StudentList = ({students, title}) => {
    
    return (
        <div className="students">
            <h2>{ title }</h2>
                <table className="student-list">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td><Link to={`/students/${student.id}`}>{ student.id }</Link></td>
                                <td>{ student.name }</td>
                                <td>{ student.age }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default StudentList;

