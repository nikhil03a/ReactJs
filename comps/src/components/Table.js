import React from 'react'
import { Fragment } from 'react';
const Table = ({ data, config, keyFn }) => {
    return (<table className='table-auto border-spacing-2'>
        <thead>
            <tr className='border-b-2'>
                {config.map((column) => {
                    if (column.header) {
                        return <Fragment key={column.label}>{column.header()}</Fragment>
                    } else {
                        return <th key={column.label}>{column.label}</th>
                    }
                })}
            </tr>
        </thead>
        <tbody>
            {data.map((rowData) => {
                return <tr className='border-b' key={keyFn(rowData)}>
                    {config.map((column) => {
                        return <td className='p-3' key={column.label}>{column.render(rowData)}</td>
                    })}
                </tr>
            })}
        </tbody>
    </table>
    )
}

export default Table
