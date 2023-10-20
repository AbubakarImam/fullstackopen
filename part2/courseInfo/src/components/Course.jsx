
function Course({ course }) {
    const { name, parts } = course
    const total = parts.reduce((a, b) => a + b.exercises, 0);
    return (
        <div>
            <Header name={name} />
            <Content part={parts} />
            <Total exercises={total} />
        </div>
    )
}

export default Course


function Header({ name }) {
    console.log("name ", name);
    return (
        <h2>{name}</h2>
    )
}

function Content(props) {
    console.log("content ", props)
    const part = props.part;

    return (
        <div>
            {part.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
}

function Part({ part }) {
    console.log("part ", part)
    const { name, exercises } = part;

    return (
        <div>
            <div>
                <p>{name} {exercises}</p>
            </div>


        </div>
    )
}


function Total(props) {
    console.log("total ", props)
    return (
        <h3>Total of {props.exercises}exercises</h3>
    )
}
