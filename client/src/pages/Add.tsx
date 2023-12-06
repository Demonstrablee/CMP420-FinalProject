import React from 'react'
import DataContainer from '../components/dataContainer'
import Title from '../components/title'
import { Link } from 'react-router-dom'

const Add = (props: any) => {

  // Post fuction here

  return (
    <div>
        
     <Title/>

   <div>

   </div>
     <DataContainer /> 

     <div>
      <button><Link to= "/students">Back to Options</Link></button>
     </div>
     
  </div>

  )
}

export default Add