import React from 'react'
import Table from './Table'
import {TbTriangle} from 'react-icons/tb'
import {TbTriangleInverted} from 'react-icons/tb'
import useSort from '../hooks/useSort'
const SortableTable = (props) => {
    const {config,data,keyFn} = props;
    const {sortBy,sortOrder,handleClick,sortedData} = useSort(data,config);
    const updatedConfig = config.map((column)=>{
        if(!column.sortValue)
            return column;
        else
            return {...column,header:()=><th className='flex items-center justify-between cursor-pointer hover:bg-gray-100'onClick={()=> handleClick(column.label)}>
                {column.label}
                <div className='p-2'>{getIcon(column.label)}</div>
            </th>}
    })
    const getIcon = (label)=>{
        if(label === sortBy){
            if(sortOrder === "asc") return <TbTriangle />
            else if(sortOrder === "desc") return <TbTriangleInverted />
        }else{
            return <div>
                <TbTriangle />
                <TbTriangleInverted />
            </div>
        }
    }
  return (
    <div>
      <Table keyFn={keyFn} config={updatedConfig} data={sortedData}/>
    </div>
  )
}

export default SortableTable
