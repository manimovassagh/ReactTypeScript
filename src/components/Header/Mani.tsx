import React, { ReactElement } from 'react'


interface ManiFace{
  color:string;
  children?: string;
}


export default function Mani(props:ManiFace): ReactElement  {
  return (
    <div>
      <div>Just a New comp</div> 
      <div>{props.color}</div>  
    </div>
  )
}
