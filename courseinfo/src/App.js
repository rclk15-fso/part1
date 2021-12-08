import React from 'react'

const Header = (props) => {
  return (
    <h1> {props.course} </h1>
  )
};

const Part = (props) => {
  return (
    <p>{`${props.part.name}, number of exercises: ${props.part.exercises}`}</p>
  );
};

const Content = (props) => {
  return (
    <>
      {props.contents.map((part) => (
        <Part part={part} key={part.id} />
      ))}
    </>
  );
};

const Total = (props) => {
  const totalExercises = props.parts.reduce((pv, cv) => (pv + cv.exercises), 0);

  return (
    <p><strong>Total</strong> Number of exercises: {totalExercises}</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 'p1',
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 'p2',
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 'p3',
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content contents={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App