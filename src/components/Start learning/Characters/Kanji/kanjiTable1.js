import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
const data = [{
  eng : "男 (man)",
  jap : "= 田 (rice field)",
  shape : "+ 力 (power)",
},
{
  eng : "森 (forest)",
  jap : "= 木 (tree)",
  shape :"x 3" ,
},
{
  eng : "働 (to work)",
  jap : "= 人 (person)",
  shape : "+ 動 (to move)",
},
]
const columns = [
  {Header:props => <span className='tableCard__Header'>Kanji</span>,
   accessor: 'eng',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>},
   {Header: props => <span className='tableCard__Header'>= Component</span>,
   accessor: 'jap',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>},
   {Header: props => <span className='tableCard__Header'>+ Component</span>,
   accessor: 'shape',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>}
]
export default class KanjiTable1 extends Component{
  state = {

  }
  render()
  {
    return(
      <ReactTable data={data} columns={columns} showPagination={false} minRows={0} className='tableCard'/>
    )
  }
}
