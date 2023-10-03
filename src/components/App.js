// create your App component here
import React, {useEffect, useState} from 'react'

function App() {
    const [image, setImage]= useState('')
    const [loading, setLoading]= useState(true)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random").then(res=>res.json()).then((json)=>{
            console.log(json)
            setImage(json.message)
            setLoading(false)})
        
        // setImage(img)
    },[])


  return (
    <>
    {loading?(<p>Loading...</p>):<img src={image} alt='A Random Dog' />}
    
    </>
  )
}

export default App