import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
const data = [{
  eng : "あ",
  jap : "安",
},
{
  eng : "か",
  jap : "加",
},
{
  eng : "た",
  jap : "太",
},
{
  eng : "ま",
  jap : "末",
},
{
  eng : "や",
  jap : "也",
},
]
const columns = [
  {Header:props => <span className='tableCard__Header'>Hiragana</span>,
   accessor: 'eng',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>},
   {Header: props => <span className='tableCard__Header'>Original Kanji</span>,
   accessor: 'jap',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>}
]
export default class ClothingTable extends Component{
  state = {

  }
  render()
  {
    return(
      <ReactTable data={data} columns={columns} showPagination={false} minRows={0} className='tableCard'/>
    )
  }
}
