const PersonList = (props) => {

    return(
        <li key = {props.key}> {props.person.name}</li>
    )
}



export default PersonList;