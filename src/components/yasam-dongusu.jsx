import React, { useEffect, useState } from 'react'


function Life() {

  const [count, setcount] = useState(0)
  const [say, setsay] = useState(0)

  useEffect(() => {
    console.log('kompenent her render olduğunda bu komponent çalışacak');
  })

  useEffect(() => {
    console.log('komponent ilk doğduğunda çalışacak');
    let ınterval = setInterval(() => {
      console.log('bu her saniye çalışacak');
    }, 1000)

    return () => {
      console.log('component öldüğünde çalışacak');
      clearInterval(ınterval)
    }

  }, [])

  useEffect(() => {
    console.log('Array içerisine yazılan değişkenin değişip değişmeme durumuna göre çalışı');
    document.title = `şu anki sayın ${count}`
  }, [count])

  return (
    <>
      <h1>{count} </h1>
      <button onClick={() => setcount(count + 1)}>arttırıcı</button>

      <button onClick={() => setsay(say - 1)}>{say}</button>
    </>
  )
}

export default Life