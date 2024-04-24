import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Dropdown } from '@mui/base/Dropdown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function SideBar() {
  return (
    <div id='sidebar'>
       <Dropdown style={{ colors: "white", height:"12%"}}>
            <h3 > <PersonIcon/> James ...  <ArrowDropDownIcon/> </h3>
        </Dropdown>
        <hr/>
        <h5>Dashboard</h5>
        <h3> <MenuBookIcon/> All Orders</h3>
    </div>
  )
}

export default SideBar


