import React from 'react';

const Grid = ({ config, data }) => {


    const renderComponentAssist = (ComponentToRender, data) =>{
        return (
          ComponentToRender(data = {data})
        )
    }


    return(  
      <table>
       <thead>
          <tr style={{color: 'white', background: 'black'}}>
             {config.map((key) => (
                <th>{key.title}</th>
             ))}
          </tr>
       </thead>
       <tbody>
        {data.map((value) =>(
          <tr>
          {     
           config.map((key) => {
           for (let [k, v] of Object.entries(value)){
               if(k === key.field){
                 if (key.component == null){
                   return (
                    <td>{v}</td>
                    )}
                 else{                 
                   return (
                     <td>{renderComponentAssist(key.component, v)}</td>
                   )
               }}}
        })}
     </tr>      
 ))}
    </tbody>
  </table>

);
    }


export default Grid;