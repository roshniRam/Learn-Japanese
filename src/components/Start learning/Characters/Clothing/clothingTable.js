import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
const data = [{
  eng : "The Dress",
  jap : "Doresu",
},
{
  eng : "The shoe",
  jap : "Katahō no kutsu",
},
{
  eng : "The man is wearing a hat",
  jap : "Otoko wa bōshi o kabutte iru",
},
{
  eng : "The skirt",
  jap : "Sukāto",
},
{
  eng : "The hat",
  jap : "Bōshi",
},
{
  eng : "The men are wearing hats",
  jap : "Dansei wa bōshi o kabutte iru",
},
{
  eng : "You are wearing shoes",
  jap : "Anata wa kutsu o kite imasu",
},
{
  eng : "I am wearing a dress and you are wearing a skirt",
  jap : "Watashi wa doresu o kite ite, anata wa sukāto o kite imasu",
},
{
  eng : "The skirt is from Veinna?",
  jap : "Sukāto wa u~īn shusshindesu",
},
{
  eng : "The shoes are perfect",
  jap : "Kutsu wa kanpekidesu",
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
