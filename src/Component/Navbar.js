import React from "react";
import IosShareIcon from '@mui/icons-material/IosShare';
import { Button } from "@mui/material";
import * as XLSX from 'xlsx';
import { Margin } from "@mui/icons-material";

function Navbar(props) {
    
  const columns = [
    { field:"id", headerName :"S.no."},
    { field:"name", headerName :"Name"},
    { field:"order", headerName :"OrderId"},
    { field:"orderDate", headerName :"OrderDate"},
    { field:"deliveryDate", headerName :"DeliveryDate"},
    { field:"status", headerName :"Status"},
    { field:"account", headerName :"Account"},
    { field:"discount", headerName :"Discount"},

    ]

const rows= props.data;


  const exportToExcel = () => {
    
    const selectedCol=columns.map(col=>col. headerName); const ws=XLSX.utils.aoa_to_sheet([selectedCol]);
    rows. forEach((row)=>{
    const rowData=columns.map(col=>row[col.field]);
    XLSX.utils.sheet_add_aoa(ws,[rowData],{origin: -1});
    }) ;
    const wb=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws, 'Sheet1');
    XLSX.writeFile(wb, 'table.xlsx');
  };


  return (
    <div className="navbar">
      <h2 style={{margin:"2%"}}> All Orders</h2>

        <div className="navbarButton">
          <div className="add" style={{ marginLeft:"-6%"}}> 
            <Button onClick={()=> {props.setOpen(true)}} variant="contained" style={{ background:" rgb(148, 80, 80)"}}> Add Orders</Button>
            </div>
          <div className="export" style={{ marginRight:"-16%"}}>
            <Button variant="contained" onClick={exportToExcel} style={{ background:"lightgrey", color:"black",height:"93%"}}>Export  <IosShareIcon/> </Button>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
