import React, { useState, useRef } from 'react'
import ForDisplay from './ForDisplay'

function ToDo() {

  const [value, setvalue] = useState({})
  const [kaydet, setKaydet] = useState([])
  const input = useRef()

  function valueYakala(e) {
    setvalue({
      todo: e.target.value,
      yapıldı: false
    })
  }

  function yapılacaklar() {
    if (input.current.value != '') {
      setKaydet([...kaydet, value])
      input.current.value = ''
    }
  }

  return (
    <>
      <div className="input-group">
        {/* <input type="text" className="form-control" onChange={(e) => setvalue(e.target.value)} /> */}
        <input type="text" className="form-control" ref={input} onChange={valueYakala} />
        <button className="btn btn-outline-secondary" onClick={yapılacaklar}>Ekle</button>
      </div>

      <ForDisplay kaydet={kaydet} setKaydet={setKaydet} />
    </>
  )
}

export default ToDo  