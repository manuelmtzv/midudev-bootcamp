
import Part from "./Part";
import uuid from "react-uuid";

function Content(props) {

  return (
    <div>
      {
        props.parts.map(part => {

          part.id = uuid(); 

          return (
            <Part 
              key={part.id}
              part={part.name}
              exercises={part.exercises} />
          )
        })
      }     
    </div>
  )
}

export default Content; 