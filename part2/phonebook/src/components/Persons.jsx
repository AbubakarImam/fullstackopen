
function Persons({ person, deletePerson }) {
    return (
        <div className="persons">
            {person.name} {person.number}
            <button onClick={() => deletePerson(person.id)}>Delete</button>

            {/* {personsToShow.map(person =>
                <div key={person.id}>
                    <p>{person.name} {person.number}</p>
                    <button onClick={() => deletePerson(person.id)}>Delete</button>
                </div>
            )} */}
        </div>
    )
}

export default Persons