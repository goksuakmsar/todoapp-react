// import Inputvalue from "./components/input-value";
// import Life from "./components/yasam-dongusu";
// import { useState } from 'react'

import ToDo from "./components/ToDo";


function App() {
  // const [show, setshow] = useState(false)

  return (
    <>
      {/* <button onClick={() => setshow(!show)}>{show ? 'Gizle' : 'Göster'}</button> */}

      {/* {
        (show === true) &&
        <Life />
      } */}

      {/* <Inputvalue /> */}
      <div className="container mt-5">
        <ToDo />
      </div>






    </>
  );
}

export default App;
