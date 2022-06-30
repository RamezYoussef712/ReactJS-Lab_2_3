import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { name, age };
        fetch('http://localhost:8000/students', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
            }).then(() => {
            console.log('new student added');
            navigate('/');
            })
        }

    const navigate = useNavigate();

    return (
        <div className="create">
            <h2>Add a new student</h2>
            <form onSubmit={ handleSubmit }>
                <label>Name:</label>
                <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                ></input>
                <label>Age:</label>
                <input
                type="number"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
                />
                <button>Add Student</button>
            </form>
        </div>
    );
}
 
export default Create;