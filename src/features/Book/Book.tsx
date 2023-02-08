import { Student, useAppSelector, useAppDispatch } from "../../app/types"
import { Table, TableCell, TableHead, TableBody, TableRow } from "@mui/material"
import { addExamen } from "../StudentList/StudentList.slice"
const Book = () => {
  const dispatch = useAppDispatch()
  const students = useAppSelector((state) => state.students)
  const subjects = useAppSelector((state) => state.subjects)
  const rate = (index: number, subject: string) => {
    dispatch(addExamen([index, subject]))
  }
  return (
    <div>
      <h1>Book</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Student</TableCell>
            {subjects.map((subject, i) => {
              return (
                <TableCell className="verticalText" key={i}>
                  {subject}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student: Student, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  {student.name} {student.surname}
                </TableCell>
                {subjects.map((subject, j) => {
                  let item = student.examens.find((a) => a.subject === subject)
                  let text = item ? item.rate : "-"
                  return (
                    <TableCell
                      style={{
                        textAlign: "center",
                        backgroundColor: "whitesmoke",
                      }}
                      key={j}
                    >
                      <h3 onClick={() => rate(i, subject)}>{text}</h3>
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
export default Book
