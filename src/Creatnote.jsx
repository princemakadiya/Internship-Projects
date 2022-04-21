
import React, { useState } from "react";
import Note from "./Note";

const Creatnote = (props) =>{

    const[note,setnote]=useState({
        titles:'',
        contents:'',
    });

    const InputEvent = (event) =>{
         const {name, value} = event.target; 
         setnote((prevData) =>{
          return {
               ...prevData,
               [name]:value,
          };
         });
         
        }

    const addEvent = () =>{
        props.passNote(note);
        
    }    

    return <>
        <div className="main_note">
            <form>
                <input type={"text"} name="title" value={note.title} onChange={InputEvent} placeholder={"title"} />
                <textarea rows={''} name="content" value={note.content} onChange={InputEvent} />
                <button onClick={addEvent}> + </button>
            </form>

        </div>


    </>

};

export default Creatnote;