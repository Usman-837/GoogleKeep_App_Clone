import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
   
   const deleteNote = () => {
    props.deleteItem(props.id)
   }
   
    return(
        <>
        <div className="note">
            <h4>{props.title}</h4>
            <br/> 
            <p>{props.content}</p>
            <button className="btn2"  onClick={deleteNote}>
            <DeleteIcon className="deleteitem"/>
            </button>
        </div>
        
        </>
    );
};

export default Note;