import React from 'react'

const EditTableRow = ({ count, title }) => {
  return (
    <tr key={count} className="border-b border-[#3C3971]">
        <td className="p-4 font-medium">{count}</td>
        <td className="p-4 font-normal">{title}</td>
        <td className="p-4 flex justify-end gap-6">
            <img src="assets/images/edit-icon.svg" alt="edit" className="cursor-pointer"/>
            <img src="assets/images/delete-icon.svg" alt="delete" className="cursor-pointer"/>
        </td>
    </tr>
  )
}

export default EditTableRow