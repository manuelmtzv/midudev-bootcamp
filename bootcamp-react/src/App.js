import Mensaje from "./components/Mensaje";

function App() {
  const message = "Hola, mundo";   

  const Description = () => {
    return <p>Esta app es de un curso de React.</p>
  }

  return (
    <div className="App">
      <Mensaje
        message={message}
        color="red" /> 
      <Mensaje
        message={message}
        color="yellow" /> 
      <Mensaje
        message={message}
        color="green" /> 
      <Description />
    </div>
  );
}

export default App;
