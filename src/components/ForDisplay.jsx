import React from 'react'

function ForDisplay({ kaydet, setKaydet }) {

  function deleteHandle(index) {
    let newList = [...kaydet]
    newList.splice(index, 1)
    setKaydet(newList)
    console.log(kaydet);
  }

  function checkhandle(index) {
    let newList = [...kaydet]
    newList[index].yapıldı = !newList[index].yapıldı
    // : newList[index].yapıldı = true

    setKaydet(newList)
  }

  return (
    <>
      {
        kaydet.map((eleman, index) => (
          <div key={index} className={`d-flex justify-content-between align-items-center p-3 ${eleman.yapıldı ? 'bg-secondary' : 'bg-transparent'}`} >
            <p className={eleman.yapıldı ? 'text-decoration-line-through' : 'text-decoration-none'}>{eleman.todo}</p>
            <div className='d-flex gap-3'>
              <i className="fa-solid fa-trash" onClick={() => deleteHandle(index)} ></i>
              <i className="fa-solid fa-check" onClick={() => checkhandle(index)} ></i>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ForDisplay



