import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
const data = [{
  eng : "Colors",
  jap : "Iro",
},
{
  eng : "Orange",
  jap : "Orenji",
},
{
  eng : "Yellow",
  jap : "Ki-iro",
},
{
  eng : "Blue",
  jap : "Ao",
},
{
  eng : "Red",
  jap : "Aka",
},
{
  eng : "Black",
  jap : "Kuro",
},
{
  eng : "Green",
  jap : "Midori",
},
{
  eng : "Brown",
  jap : "Cha-iro",
},
{
  eng : "Purple",
  jap : "Murasaki",
},
{
  eng : "White",
  jap : "Shiro",
},
{
  eng : "Gray",
  jap : "Hai-iro",
},
{
  eng : "Gold",
  jap : "Kin-iro",
},
{
  eng : "Silver",
  jap : "Gin-iro",
},
{
  eng : "Rainbow",
  jap : "Niji",
},
{
  eng : "Multi-colored",
  jap : "Tashokuno",
},
]
const columns = [
  {Header:props => <span className='tableCard__Header'>English</span>,
   accessor: 'eng',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>},
   {Header: props => <span className='tableCard__Header'>Japanese</span>,
   accessor: 'jap',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>}
]
export default class ColorsTable extends Component{
  state = {

  }
  render()
  {
    return(
      <ReactTable data={data} columns={columns} showPagination={false} minRows={0} className='tableCard'/>
    )
  }
}
