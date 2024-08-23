const Header = (p) => {
  return (
    <>
      <h1>{p.course}</h1>
    </>
  );
};

const Part = (p) => {
  return (
    <>
      <p>
        {p.name} {p.exercises}
      </p>
    </>
  );
};

const Content = (p) => {
  return (
    <>
      <Part name={p.parts[0].name} exercises={p.parts[0].exercises} />
      <Part name={p.parts[1].name} exercises={p.parts[1].exercises} />
      <Part name={p.parts[2].name} exercises={p.parts[2].exercises} />
    </>
  );
};

const Total = (p) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {p.parts[0].exercises +
          p.parts[1].exercises +
          p.parts[2].exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
