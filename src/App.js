import './App.css';
import React, {useState} from 'react';
import { useForm } from "react-hook-form";

/*
function MyButton(){
  return (
    <button>I'm a button</button>
  )
}
*/

function App() {
  const {register, handleSubmit} = useForm()
  const [preview, setPreview] = useState(null) //state variable and its setter are created using useState to hold the preview data
  const [fileType, setFileType] = useState(null)

  const onSubmit = (data) => {
    const file = data.picture[0];

    //if file is a valid file console log the following information on the file
    if(file) {
      console.log("File uploaded:", file.name)
      console.log("File size:", file.size, "bytes");
      console.log("File Type:", file.type)
    }
    
    //Create a preivew of the picture (how does setPreview work)
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="flex-container">
      <div className ="header">
        <h1>In Progress...</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          {...register("picture")} 
          type="file"
          accept="image/*, video*/"
        />
        <button>Submit</button>
      </form>

      {preview && (
        <div style={{marginTop: '20px'}}>
          <h2>Preview: </h2>
        {fileType === 'image' ? (
          <img 
            src={preview} 
            alt="Preview" 
            style={{maxWidth: '300px', maxHeight: '400px'}} 
          />
        ):(
          <video
            src={preview}
            controls
            style={{maxWidth: '500px', maxHeight: '400px'}}
          >
            Your bowser does not support video tag.
          </video>
          )}
        </div>
      )}
    </div>
  );
}
export default App;
