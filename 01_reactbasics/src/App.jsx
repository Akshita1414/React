
import Akshita from "./akshita"

function App() {
  const username = "Akshita"
// At the end jsx m hm sirf 1 hi element return kr skte h issliye usko <> </> fragment k andr wrap krdiya
  return (
    <>
    <Akshita/>
    <h4>Kaise ho! {username}</h4> // username is evaluated expression yha pe final evaluate dexp hi likh skte h if else ya fo loop evaluate ni kr skte
    <p>Kya chlra zindagi m?</p>
    </>


  )
      
}

export default App
