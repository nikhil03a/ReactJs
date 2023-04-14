import { useState } from 'react';
const useSort = (data,config) => {
    const [sortOrder,setSortOrder] = useState(null);
    const [sortBy,setSortBy] = useState(null);
    const handleClick = (label)=>{
        if(sortBy === label){
            if(sortOrder === null) setSortOrder('asc');
            else if(sortOrder === 'asc') setSortOrder('desc');
            else {
                setSortOrder(null);
                setSortBy(null);
            }
        }else{
            setSortBy(label);
            setSortOrder('asc');
        }
    }
    let sortedData = data;
    let sortFunction;
    
    if(sortBy != null){
        config.map((column)=>{
            if(column.label === sortBy) {
                sortFunction = column.sortValue;
            }
            return column;
        })
        sortedData = [...data].sort((a,b)=> {
            const reverse = sortOrder==='desc' ? -1 : 1;
            if(typeof sortFunction(a) === 'number'){
                    return (sortFunction(a)-sortFunction(b))*reverse;
            }else{
                    return (sortFunction(a).localeCompare(sortFunction(b)))*reverse;
            }
           
        })
    }
  return {sortBy,sortOrder,handleClick,sortedData};
}

export default useSort
