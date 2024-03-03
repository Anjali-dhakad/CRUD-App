import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const { id } = useParams();
    const [inputData, setInputData] = useState({});
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    const navigate = useNavigate();

    function getList() {
        fetch(`http://localhost:3001/users/${id}`)
            .then((result) => {
                result.json().then((resp) => {
                    setName(resp.name);
                    setAge(resp.age);
                    setEmail(resp.email);
                    setCity(resp.city);
                    setInputData(resp);
                });
            });
    }

    useEffect(() => {
        getList();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { name, age, email, city };
        fetch(`http://localhost:3001/users/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((result) => {
            result.json().then((resp) => {
                alert("Updated successfully..");
                getList();
                navigate('/');
            });
        });
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='d=w-50 border bg-secondary text-white p-5'>
                <h1>Update the User</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' value={name} className='form-control' onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input type="number" name='age' value={age} className='form-control' onChange={(e) => setAge(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name='email' value={email} className='form-control' onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input type="text" name='city' value={city} className='form-control' onChange={(e) => setCity(e.target.value)}></input>
                    </div>
                    <button className='btn btn-primary'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Update;