import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
const data = [{
  eng : "Sunday",
  jap : "Nichiyôbi",
},
{
  eng : "Monday",
  jap : "Getsuyôbi",
},
{
  eng : "Tuesday",
  jap : "Kayôbi",
},
{
  eng : "Wednesday",
  jap : "Suiyôbi",
},
{
  eng : "Thursday",
  jap : "Mokuyôbi",
},
{
  eng : "Friday",
  jap : "Kinyôbi",
},
{
  eng : "Saturday",
  jap : "Doyôbi",
},
{
  eng : "January",
  jap : "1 Tsuki",
},
{
  eng : "February",
  jap : "2 Tsuki",
},
{
  eng : "March",
  jap : "Kōshin",
},
{
  eng : "April",
  jap : "4 Tsuki",
},
{
  eng : "May",
  jap : "5 Tsuki",
},
{
  eng : "June",
  jap : "6Gatsu",
},
{
  eng : "July",
  jap : "7 Tsuki",
},
{
  eng : "August",
  jap : "8 Tsuki",
},
{
  eng : "September",
  jap : "9 Tsuki",
},
{
  eng : "October",
  jap : "10 Tsuki",
},
{
  eng : "November",
  jap : "11 Tsuki",
},
{
  eng : "December",
  jap : "12 Tsuki",
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
export default class TimeTrackingTable extends Component{
  state = {

  }
  render()
  {
    return(
      <ReactTable data={data} columns={columns} showPagination={false} minRows={0} className='tableCard'/>
    )
  }
}
