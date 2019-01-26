import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
const data = [{
  eng : "We are Anna and Lukas",
  jap : "Watashitachi wa An'na to rūkasudesu",
},
{
  eng : "We are women",
  jap : "Watashitachiha joseidesu",
},
{
  eng : "We are men",
  jap : "Watashitachiha danseidesu",
},
{
  eng : "Men and Women",
  jap : "Otome",
},
{
  eng : "The men",
  jap : "Dansei wa",
},
{
  eng : "The women",
  jap : "Josei-tachi",
},
{
  eng : "This/That is water",
  jap : "Kore wa mizudesu",
},
{
  eng : "We are children",
  jap : "Watashitachiha kodomodesu",
},
{
  eng : "We are boys",
  jap : "Watashitachiha otokonokodesu",
},
{
  eng : "Lukas and Anna are children",
  jap : "Rūkasu to An'na wa kodomodesu",
},
{
  eng : "They are women",
  jap : "Kanojotachi wa joseidesu",
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
export default class BasicSentencesTable extends Component{
  state = {

  }
  render()
  {
    return(
      <ReactTable data={data} columns={columns} showPagination={false} minRows={0} className='tableCard'/>
    )
  }
}
