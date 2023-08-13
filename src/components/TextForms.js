import React,{useState} from 'react'


export default function TextForms(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclearClick = ()=>{
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    
    return (
        <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <b><p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes reading time for user</p></b>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  )
}
