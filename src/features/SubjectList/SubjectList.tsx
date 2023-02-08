import { List, ListItem, ListItemText, TextField } from "@mui/material"
import { useState, KeyboardEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../app/types"
import { addSubject } from "./SubjectList.slice"
const SubjectList = () => {
  const [text, setText] = useState("")
  const dispatch = useAppDispatch()
  const subjects = useAppSelector((state) => state.subjects)
  const handlKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(addSubject(text))
      setText("")
    }
  }
  return (
    <div>
      <h1>SubjectList</h1>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handlKeyDown}
      />
      <List sx={{ width: 100, margin: "auto" }}>
        {subjects.map((subject, i) => {
          return (
            <ListItem key={i}>
              <ListItemText primary={subject} />
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}
export default SubjectList
