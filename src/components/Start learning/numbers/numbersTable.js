import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
const data = [{
  eng : "Numbers",
  sjap : "Suji",
  jap : "Suji",
},
{
  eng : "Zero",
  sjap : "Zero/Nuru",
  jap : "",
},
{
  eng : "One",
  sjap : "Ichi",
  jap : "Hitotsu",
},
{
  eng : "Two",
  sjap : "Ni",
  jap : "Futatsu",
},
{
  eng : "Three",
  sjap : "San",
  jap : "Mittsu",
},
{
  eng : "Four",
  sjap : "Shi/Yon",
  jap : "Yottsu",
},
{
  eng : "Five",
  sjap : "Go",
  jap : "Itsutsu",
},
{
  eng : "Six",
  sjap : "Roku",
  jap : "Muttsu",
},
{
  eng : "Seven",
  sjap : "Shichi/Nana",
  jap : "Nanatsu",
},
{
  eng : "Eight",
  sjap : "Hachi",
  jap : "Yattsu",
},
{
  eng : "Nine",
  sjap : "yū/Ku",
  jap : "Kokonotsu",
},
{
  eng : "Ten",
  sjap : "Ju",
  jap : "To",
},
{
  eng : "Eleven",
  sjap : "Jū ichi",
  jap : "Tō amari hitotsu",
},
{
  eng : "Twelve",
  sjap : "Jū ni",
  jap : "Tō amari futatsu",
},
{
  eng : "Thirteen",
  sjap : "ū sa",
  jap : "Tō amari mittsu",
},
{
  eng : "Fourteen",
  sjap : "Jū yon",
  jap : "Tō amari yottsu",
},
{
  eng : "Fifteen",
  sjap : "Jū go",
  jap : "Tō amari itsutsu",
},
{
  eng : "Sixteen",
  sjap : "Jū roku",
  jap : "Tō amari itsutsu",
},
{
  eng : "Seventeen",
  sjap : "jū nana",
  jap : "Tō amari itsutsu",
},
{
  eng : "Eighteen",
  sjap : "jū hachi",
  jap : "Tō amari itsutsu",
},
{
  eng : "Nineteen",
  sjap : "jū kyū",
  jap : "Tō amari itsutsu",
},
{
  eng : "Twenty",
  sjap : "Ni-jū",
  jap : "Hatachi",
},
{
  eng : "Thirty",
  sjap : "San-jū",
  jap : "Miso/Misoji",
},
{
  eng : "Forty",
  sjap : "Yon-jū",
  jap : "Yoso/Yosoji",
},
{
  eng : "Fifty",
  sjap : "go-jū",
  jap : "iso/isoji",
},
{
  eng : "Sixty",
  sjap : "roku-jū",
  jap : "muso/musoji",
},
{
  eng : "Seventy",
  sjap : "nana-jū",
  jap : "nanaso/nanasoji",
},
{
  eng : "Eighty",
  sjap : "hachi-jū",
  jap : "yaso/yasoji",
},
{
  eng : "Ninety",
  sjap : "kyū-jū",
  jap : "kokonoso/kokonosoji",
},
{
  eng : "One Hundred",
  sjap : "Hyaku",
  jap : "momo",
},
{
  eng : "Two Hundred",
  sjap : "nihyaku",
  jap : "futao",
},
{
  eng : "Three Hundred",
  sjap : "sanbyaku",
  jap : "mio",
},
{
  eng : "Four Hundred",
  sjap : "yonhyaku",
  jap : "yō",
},
{
  eng : "A Thousand",
  sjap : "sen/issen",
  jap : "chi",
},
{
  eng : "Two Thousand",
  sjap : "nisen",
  jap : "futachi",
},
{
  eng : "Two Thousand",
  sjap : "nisen",
  jap : "futachi",
},
{
  eng : "Ten Thousand",
  sjap : "ichiman",
  jap : "yorozu",
},
]
const columns = [
  {Header:props => <span className='tableCard__Header'>English</span>,
   accessor: 'eng',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>},
   {Header:props => <span className='tableCard__Header'>Sino-Japanese</span>,
    accessor: 'sjap',
    Cell: props => <span className='tableCard__Element'>{props.value}</span>},
   {Header: props => <span className='tableCard__Header'>Native Japanese</span>,
   accessor: 'jap',
   Cell: props => <span className='tableCard__Element'>{props.value}</span>}
]
export default class NumbersTable extends Component{
  state = {

  }
  render()
  {
    return(
      <ReactTable data={data} columns={columns} showPagination={false} minRows={0} className='tableCard'/>
    )
  }
}
