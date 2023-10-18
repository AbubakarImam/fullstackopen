
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts} />
    </div>
  )
}

export default App

function Header(props) {
  console.log("header ", props)
  return (
    <div>{props.course}</div>
  )
}

function Content(props) {
  console.log("content ", props.part)
  console.log(typeof (props.part))
  const [a, b, c] = props.part
  console.log(a);
  return (
    <div>
      <Part part={a} />
      <Part part={b} />
      <Part part={c} />
    </div>
  )
}

function Part(props) {
  console.log("part ", props)
  const { name, exercises } = props.part;
  return (
    <div>
      <div>
        <p>{name}</p>
        <Total exercises={exercises} />
      </div>


    </div>
  )
}


function Total(props) {
  console.log("total ", props)
  return (
    <div>Number of exercises:{props.exercises}</div>
  )
}
