
import uuid from "react-uuid";

function Part(props) {

  console.log(props)

  return (
    <p key={props.key}>
      {props.part} {props.exercises} {uuid()}
    </p>
  )
}

export default Part; 