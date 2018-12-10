import React, { Component } from 'react';
import ReactTable from "react-table";
import Card from '../../../Card.js';
import 'react-table/react-table.css';
const data = [{
  eng : "Mountain",
  jap : "山",
  shape : "Mountain peaks",
},
{
  eng : "River",
  jap : "川",
  shape :"Flowing River" ,
},
{
  eng : "Tree",
  jap : "木川",
  shape : "A tree with branches",
},
]
const columns = [
  {Header:props => <span className='tableCard__Header'>Kanji</span>,
   accessor: 'jap',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>},
   {Header: props => <span className='tableCard__Header'>Meaning</span>,
   accessor: 'eng',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>},
   {Header: props => <span className='tableCard__Header'>Shape</span>,
   accessor: 'shape',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>}
]
export default class KanjiTable extends Component{
  state = {

  }
  render()
  {
    return(
      <div className="kanjiTable">
      <Card
      heading = "Origin"
      content = "Kanji was imported from China, but pronounciations and usage of Kanji has been modified to fit the Japanese language. In addition, some Kanji characters were developed in Japan."
      />
      <ReactTable data={data} columns={columns} showPagination={false} minRows={0} className='tableCard'/>  
      </div>
    )
  }
}
