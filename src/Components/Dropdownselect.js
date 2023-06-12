import { hover } from '@testing-library/user-event/dist/hover';
import '../Styles/drop.css'
import React, { useState } from 'react'

const arr=[{
    title:"Contact"
},{
    title:"About us"
},
{
    title:"Home"
},
{
    title:"go to "
}]
//making function component
function Dropdownselect() {

    //render dropdown menu
    const [open,setOpen]=useState(false);
    //render on items in dropdown menu
    const [hoveredIndex, setHoveredIndex] = useState(null);


    function hnadleEnter()
    {
        setOpen(true);
    }
    function handleLeave()
    {
        setOpen(false);
        console.log(open);
    }
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
      };
    
      const handleMouseLeave = () => {
        setHoveredIndex(null);
      };
      function close()
      {
        setOpen(false);
        console.log("open",open);
      }
  return (
    <div className="App">

<h1 onMouseEnter={hnadleEnter} style={{backgroundColor:'white',marginLeft:230,marginRight:200}} >Select<span><i class="bi bi-caret-down-square-fill"></i></span></h1>
  
  {
    open &&
    <div>
<ul>
   {arr.map((item,index)=>(
<li onClick={close} className="Liststyle"onMouseEnter={()=>handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      style={{backgroundColor:hoveredIndex==index?'blue':'white'}}>{item.title}
      

      
      
      </li>

    ))}
</ul>


        </div>
  }

</div>

  )
}

export default Dropdownselect