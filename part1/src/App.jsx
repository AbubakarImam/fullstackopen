
// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
//   return (
//     <div>
//       <Header course={course.name} />
//       <Content part={course.parts} />
//     </div>
//   )
// }

// export default App

// function Header(props) {
//   console.log("header ", props)
//   return (
//     <div>{props.course}</div>
//   )
// }

// function Content(props) {
//   console.log("content ", props.part)
//   console.log(typeof (props.part))
//   const [a, b, c] = props.part
//   console.log(a);
//   return (
//     <div>
//       <Part part={a} />
//       <Part part={b} />
//       <Part part={c} />
//     </div>
//   )
// }

// function Part(props) {
//   console.log("part ", props)
//   const { name, exercises } = props.part;
//   return (
//     <div>
//       <div>
//         <p>{name}</p>
//         <Total exercises={exercises} />
//       </div>


//     </div>
//   )
// }


// function Total(props) {
//   console.log("total ", props)
//   return (
//     <div>Number of exercises:{props.exercises}</div>
//   )
// }

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

import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + updatedNeutral + bad);
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + neutral + updatedBad);
  }

  const average = (good - bad / total);
  const positive = (good / total) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine counter={good} text='good' />
        <StatisticLine counter={neutral} text='neutral' />
        <StatisticLine counter={bad} text='bad' />
        <StatisticLine counter={total} text='all' />
        <StatisticLine counter={average} text='average' />
        <StatisticLine counter={`${positive}%`} text='positive' />
      </tbody>
    </table>
  )
}

const StatisticLine = ({ counter, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{counter}</td>
    </tr>
  )
}
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>