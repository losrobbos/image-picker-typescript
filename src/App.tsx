import { useEffect, useRef, useState } from 'react'
import './App.css'
import { ImagePicker } from './ImagePicker'

function App() {

  // this will hold our selected image (we provide a default image)
  const [image, setImage] = useState("https://images.unsplash.com/photo-1572584062243-27f605fc6987?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8a29hbGF8fHx8fHwxNjYxODQ4MDYw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=150")

  // and some title field
  const refTitle = useRef<HTMLInputElement>(null)

  // send to "API"
  const onSend = () => {
    console.log("Sending Form to API...")

    // no title given? return
    if(!refTitle.current) return

    const dataToSend = {
      title: refTitle.current.value,
      image: image
    }
    console.log(dataToSend)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ImagePicker 
          image={image} 
          setImage={setImage} 
          // put your own style for the image here
          imageStyle={{ borderRadius: "50%", width: "200px", height: "200px" }} 
          // or a CSS className with:
          // imageClassName="<yourCssClassName"
        />
        <input placeholder='Title please :)' type="text" ref={ refTitle } />
        <button onClick={ onSend } >Create</button>
        <div style={{ fontSize: "0.7em" }}>Open up the dev console, so see what happens, when clicking the button :)</div>
      </header>
    </div>
  )
}

export default App
