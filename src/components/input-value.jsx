import React, { useState } from 'react'

function Inputvalue() {

  const [value, setvalue] = useState('')
  const [yazdır, setyazdır] = useState([])

  function valueYakala(e) {
    //console.log
    setvalue(e.target.value);
  }
  function ekranaYazdır() {
    setyazdır([...yazdır, value])
    setvalue('')

  }


  return (

    <>
      <input type="text" onChange={valueYakala} value={value} />
      <button onClick={ekranaYazdır}>kaydet</button>
      {
        yazdır.map((eleman, index) => (
          <p key={index}>{eleman} </p>
        ))
      }

    </>
  )
}

export default Inputvalue