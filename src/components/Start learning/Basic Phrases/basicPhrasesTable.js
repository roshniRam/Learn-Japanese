import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
const data = [{
  eng : "Yes",
  jap : "Hai",
},
{
  eng : "No",
  jap : "Lie",
},
{
  eng : "Please",
  jap : "O-negai shimasu",
},
{
  eng : "Thank you",
  jap : "Arigato",
},
{
  eng : "ReYou're welcome",
  jap : "Doitashimashite",
},
{
  eng : "Excuse me",
  jap : "Sumimasen",
},
{
  eng : "I am sorry",
  jap : "Gomennasai",
},
{
  eng : "Good morning",
  jap : "Ohayo gozaimasu",
},
{
  eng : "Good evening",
  jap : "Konbanwa",
},
{
  eng : "Good night",
  jap : "O-yasumi nasai",
},
{
  eng : "That's all right",
  jap : "Dai jobu desu",
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
export default class BasicPhrasesTable extends Component{
  state = {

  }
  render()
  {
    return(
      <ReactTable data={data} columns={columns} showPagination={false} minRows={0} className='tableCard'/>
    )
  }
}
