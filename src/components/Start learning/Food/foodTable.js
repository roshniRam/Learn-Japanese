import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
const data = [{
  eng : "Soup",
  jap : "Sūpu",
},
{
  eng : "Ice-cream",
  jap : "EiAisukurīmu",
},
{
  eng : "Apple",
  jap : "Ringo",
},
{
  eng : "Orange",
  jap : "Orenji",
},
{
  eng : "Juice",
  jap : "Jūsu",
},
{
  eng : "Egg",
  jap : "Tamago",
},
{
  eng : "Cheese",
  jap : "Chīzu",
},
{
  eng : "Meat",
  jap : "O niku",
},
{
  eng : "Sugar",
  jap : "Shugā",
},
{
  eng : "Potato",
  jap : "Jagaimo",
},
{
  eng : "Rice",
  jap : "Gohan",
},
{
  eng : "Salt",
  jap : "Shio",
},
{
  eng : "Chocolate",
  jap : "Chokorēto",
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
export default class FoodTable extends Component{
  state = {

  }
  render()
  {
    return(
      <ReactTable data={data} columns={columns} showPagination={false} minRows={0} className='tableCard'/>
    )
  }
}
