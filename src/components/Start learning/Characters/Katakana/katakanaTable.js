import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
const data = [{
  eng : "ア",
  jap : "阿",
},
{
  eng : "カ",
  jap : "加",
},
]
const columns = [
  {Header:props => <span className='tableCard__Header'>Katakana</span>,
   accessor: 'eng',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>},
   {Header: props => <span className='tableCard__Header'>Original Kanji</span>,
   accessor: 'jap',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>}
]
export default class KatakanaTable extends Component{
  state = {

  }
  render()
  {
    return(
      <ReactTable data={data} columns={columns} showPagination={false} minRows={0} className='tableCard'/>
    )
  }
}
