import { useState } from 'react'
import InputBox from "./components/InputBox"
import TableBox from "./components/TableBox.jsx"
function App() {
  const [inputs, setInputs] = useState({
    name: "",
    email: ""
  })
  const [editClick, setEditClick] = useState(false)
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState()
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
      setInputs({ ...inputs, [name]: value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData(...tempTableData)
    } else {
      setTableData([...tableData, inputs])
      setInputs({
        name: "",
        email: ""
      })
    }
  }
  const deleteHandler = (id) => {
    console.log(id)
    const tempTableData = tableData.filter((data, index) => index !== id);
    setTableData(tempTableData)
  }
  const editHandler = (id) => {
    const temdInputData = tableData[id];
    setInputs({
      name: temdInputData.name,
      email: temdInputData.email
    })
    setEditClick(true)
    setEditIndex(id)
  }
  // console.log("tableData",tableData)
  return (
    <>
      <div className="mainContainer">
        <InputBox inputs={inputs} inputHandler={inputHandler} submitHandler={submitHandler} editClick={editClick} />
        {
          (tableData.length>0)?
          <TableBox tableData={tableData} deleteHandler={deleteHandler} setEditClick={setEditClick} editClick={editClick} editHandler={editHandler} />
          :<h2 style={{textAlign:"center",opacity:".5"}}>no data to show</h2>
        }
      </div>
    </>
  )
}

export default App
