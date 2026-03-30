const App = () => {
  const students = [
    {
      id: 1,
      name: "Alice",
      age: 20,
    },
    {
      id: 2,
      name: "Bob",
      age: 21,
    },
    {
      id: 3,
      name: "Charlie",
      age: 22,
    },
    {
      id: 4,
      name: "Alice",
      age: 20,
    },
  ]

  return (
    <div>
      <h1>Students List: </h1>
      {students.map((student)=>(
        <div key={student.id}>
          {student.id}: {student.name} - {student.age}
        </div>
      ))}

    </div>
  )
}

export default App
