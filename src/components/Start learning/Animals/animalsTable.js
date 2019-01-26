import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
const data = [{
  eng : "Animal",
  jap : "Dōbutsu",
},
{
  eng : "Cat",
  jap : "Neko",
},
{
  eng : "Dog",
  jap : "Inu",
},
{
  eng : "Bear",
  jap : "Kuma",
},
{
  eng : "Mouse",
  jap : "Mausu",
},
{
  eng : "Horse",
  jap : "Uma",
},
{
  eng : "Duck",
  jap : "Ahiru",
},
{
  eng : "Bird",
  jap : "Tori",
},
{
  eng : "Pet",
  jap : "Petto",
},
{
  eng : "Cow",
  jap : "Ushi",
},
{
  eng : "Pig",
  jap : "Buta",
},
{
  eng : "Fly",
  jap : "Tobu",
},
{
  eng : "Bee",
  jap : "Hachi",
},
{
  eng : "Spider",
  jap : "Kumo",
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
export default class AnimalsTable extends Component{
  state = {

  }
  render()
  {
    return(
      <ReactTable data={data} columns={columns} showPagination={false} minRows={0} className='tableCard'/>
    )
  }
}
