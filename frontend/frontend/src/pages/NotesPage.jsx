import {Box,Grid} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../Redux/notes/note.actions";
import NoteCard from "../components/Notespage/NoteCard/NoteCard";

export default function NotesPage(){
    const dispatch = useDispatch()
    const {loading,error,data} = useSelector((state) =>state.noteReducer)
   console.log(data)
   const [notes,setNotes] = useState([])

   useEffect(()=>{

    dispatch(getNotes())

   },[])

   useEffect(()=>{

    setNotes(data)

   },[data])
    return <Box mt={20}>
        <Grid>
          {notes?.map((e1)=><NoteCard {...e1}/>)}
        </Grid>
    </Box>
}
