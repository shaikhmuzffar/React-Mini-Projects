import React from 'react'

export default function TableBox({ tableData, deleteHandler, setEditClick, editHandler }) {
    console.log("tableData", tableData)
    return (
        <div>
            <table border="1px">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item, id) => <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <button className='btn green' onClick={() => {
                                    editHandler(id)
                                }}>edit</button>
                                <button className='btn red' onClick={() => deleteHandler(id)}>delete</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div >
    )
}

