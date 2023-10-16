import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: "",
        
    });

    const InputEvent = (event) => {
        const {value, name} = event.target;
        
        setNote((preData) => {
            return{
                ...preData,
                [name] : value,
            };
        });
    };

    const addEvent = (event) => {
        event.preventDefault();
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }

    return(
        <>
        <div className="main-note">
        <form>
            <input 
            type="text"
            name ="title" 
            value={note.title} 
            onChange={InputEvent}
            placeholder="Title" 
            />
            <br/><br/>
            <textarea 
            name ="content" 
            value={note.content} 
            onChange={InputEvent}  
            placeholder="Write text here...."
            />
            <button className="btn1" onClick={addEvent}>
                <AddIcon className="plus-sign"/>
            </button>
        </form>
        </div>
        </>
    );
};

export default CreateNote;