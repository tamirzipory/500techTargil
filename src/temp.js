import React from 'react';

const Grid = ({ config, data }) => {
    const extractKeys= data[0];
    const len = Object.values(extractKeys).length;
    const myKeys = Object.keys(extractKeys);
    console.log(len)
   
    return(
  <table>
    <thead>
    <tr>
        {myKeys.map((key) => (
            <th>{key}</th>
        ))}
      
    </tr>
    </thead>
    <tbody>
<tr>
    {Object.values(data).map((value, idx) =>(
        console.log(value),
    Object.values(value).map(element => (
            console.log(element)
        ))
  
   /* console.log(Object.values(value))*/
      


))}
</tr>

    </tbody>
  </table>
);
    }
export default Grid;













import React from 'react';






const Grid = ({ config, data }) => {
    const extractKeys= data[0];

    

        console.log(extractKeys)

    const len = Object.values(extractKeys).length;
    const myKeys = Object.keys(extractKeys);
    console.log(len)
   

   
    return(
  <table>
    <thead>
    <tr>
        {myKeys.map((key) => (
            <th>{key}</th>
        ))}
      
    </tr>
    </thead>
    <tbody>

    {Object.values(data).map((value, idx) =>(
        <tr>
            {
    Object.values(value).map(element => (
        console.log(element),
            <td>{`${element}`}</td>
        ))
        }

        </tr>
  
   /* console.log(Object.values(value))*/
      


))}


    </tbody>
  </table>
);
    }
export default Grid;