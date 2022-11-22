import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const url ='http://127.0.0.1:8000/api/students';
  const[students,setStudents]=useState();
  const fetchApi =async()=>{
    const response = await fetch(url);
    console.log(response.status)
    const responseJSON= await response.json();
    setStudents(responseJSON);
  }
  useEffect(()=>{
    fetchApi();
  },[])
  return (
    <div className="App">
      <header className="App-header">
<h1>Lista de alumnos </h1>
<table class="table table-bordered">
    <thead>
        <tr>
            <th >Nombre</th>
            <th>Curso</th>
            <th>Cuotas</th>
            <th>Precio</th>
        </tr>
    </thead>
    <tbody>
    <tr>
{ ! students ? 'Cargando...':
students.map((student, index)=>{
  return <td key={index}> {student.fullname}</td>
})
}
{ ! students ? 'Cargando...':
students.map((student, index)=>{
  return <td key={index}> {student.courses}</td>
})
}
{ ! students ? 'Cargando...':
students.map((student, index)=>{
  return <td key={index}> {student.quotas}</td>
})
}
{ ! students ? 'Cargando...':
students.map((student, index)=>{
  return <td key={index}> {student.price}</td>
}) 

}
</tr>
</tbody>
</table>
      </header>
    </div>
  );
}

export default App;
