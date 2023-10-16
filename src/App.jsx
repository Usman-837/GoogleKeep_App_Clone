import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";
const App = () => {
    const [addItem, setAddItem] = useState([]);
    
    const addNote = (note) => {
        setAddItem((preData) => {
         return [
            ...preData,
            note,
        ];   
        });
    }; 

    const onDelete = (id) => {
        setAddItem((oldData) => 
        oldData.filter((currdata, index) => {
            return index !== id;
        }) 
        );
    };

    return(
        <>
        <Header/>
        <CreateNote passNote={addNote} />
        {addItem.map((val, index) => {
            return(
                <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
                />
            );
        })}
        <Footer/>
        </>
    );
};

export default App;