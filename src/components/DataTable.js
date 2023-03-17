import { click } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react';

const DataTable = () => {

    const initialState = [
        {
            id: 1, 
            firstName: 'Jack', 
            lastName: 'Smith', 
            age: 23,
            birthdate: '2000-01-05',
            city: 'London',
            country: 'England'
        },
        {
            id: 2, 
            firstName: 'Emre', 
            lastName: 'Zengin', 
            age: 26,
            birthdate: '1996-12-03',
            city: 'İstanbul',
            country: 'Türkiye '
        },
        {
            id: 3, 
            firstName: 'Ahmad', 
            lastName: 'Naser', 
            age: 19,
            birthdate: '2003-06-15',
            city: 'Cairo',
            country: 'Egypt'
        },
        {
            id: 4, 
            firstName: 'Ulf', 
            lastName: 'Svensson', 
            age: 25,
            birthdate: '1997-08-29',
            city: 'Gothenburg',
            country: 'Sweden'
        },
        {
            id: 5, 
            firstName: 'Lars', 
            lastName: 'Kristersson', 
            age: 30,
            birthdate: '1992-09-17',
            city: 'Stockholm',
            country: 'Sweden'
        }
    ]
            

    const [studentList, setStudentList] = useState(initialState);
    const [showData, setShowData] = useState(false);
    const [findStudent, setFindStudent] = useState({});

    const clickBtn = (id) => {
        const foundStudent = studentList.find((findStudent) => findStudent.id === id);

        if(foundStudent){
             setFindStudent(foundStudent);
             setShowData(true);
        }
    }

    const hideBtn = () => {
        setShowData(false);
    }



    const TableHeader = () => {
        return (
            <thead>
                <tr className='header'>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Details</th>
                </tr>
           </thead>
        )
    }

    const TableActionDetails = ({id}) => {
        return (
          <button type='button' className='btn btn-success' onClick={() => clickBtn(id)}>Show</button>
        )
      }
    const TableActionHide = () => {
        return (
          <button type='button' className='btn btn-danger' onClick={hideBtn}>Hide</button>
        )
      }

    const TableRow = (props) => {
        return ( 
            <tbody>
                {props.studentList.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.age}</td>
                        <td><TableActionDetails id={student.id} /></td>
                    </tr>
            ))}
            </tbody>
        )
    }

    return (

        <div className='container'>

        <div className='table-title'>
            <h1>Student List</h1>
            <hr/>
        </div>
        <table className='table table-striped'>
          <TableHeader />
          <TableRow studentList={studentList} /> {/* Passing props to table rows*/}
        </table>

    {showData && (
       <>
            <br />
            <hr />
            <br />
            <div className='card'>
                <div className='card-header bg-dark text-white'>
                Data
                </div>
                <div className='card-body'>
                    <div className='bm-3'>
                        <b>Student Information: </b>
                        <hr/>
                          <div>
                            <p> <b>ID:</b> {findStudent.id}</p>
                            <p> <b>First Name:</b> {findStudent.firstName}</p>
                            <p> <b>Last Name:</b> {findStudent.lastName}</p>
                            <p> <b>Age:</b> {findStudent.age}</p>
                            <p> <b>Birthdate:</b> {findStudent.birthdate}</p>
                            <p> <b>City:</b> {findStudent.city}</p>
                            <p> <b>Country:</b> {findStudent.country}</p>
                            <td><TableActionHide/></td>
                          </div> 
                    </div>
                </div>
            </div> 
       </>)}

       </div>
      )
}

export default DataTable;