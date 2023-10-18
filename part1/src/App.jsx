
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

 // Lesson
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// import { useState } from 'react'

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// export default App

// const Display = ({ counter }) => <div>{counter}</div>

// const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>