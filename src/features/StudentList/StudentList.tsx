import { List, ListItem, ListItemText, TextField } from "@mui/material"
import { useState,KeyboardEvent } from "react"
import { Student,useAppDispatch,useAppSelector } from "../../app/types"
import { addStudent } from "./StudentList.slice"
const StudentList = () => {
  const students = useAppSelector((state) => state.students)
   const [text, setText] = useState("")
   const dispatch = useAppDispatch()
   const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
         const [name, surname] = text.split(" ")
         let student = { name, surname, examens: [] } as Student
         dispatch(addStudent(student))
         setText("")
     }
  }
  return (
    <div>
      <h1>StudentList</h1>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <List sx={{ width: 200, margin: "auto" }}>
        {students.map((student, i) => {
          return (
            <ListItem key={i}>
              <ListItemText primary={student.name + " " + student.surname} />
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}
export default StudentList
