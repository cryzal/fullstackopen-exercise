const Header = (props) => {
  return (
    <>
        <h1>{props.course}</h1>
    </>
  )
}


const Content = (props) => {
  return (
    <>
      <Part part={props}/>
    
    </>
  )
}

const Part = (props) => {
 
  return (
    <>
        <p>{props.part.part[0].name} {props.part.part[0].exercises}</p>
        <p>{props.part.part[1].name} {props.part.part[1].exercises}</p>
        <p>{props.part.part[2].name} {props.part.part[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
        <p>Number of exercises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content part = {parts}/>
      <Total total = {parts[0].exercises+parts[1].exercises+parts[2].exercises}/>
    </div>
  )
}

export default App