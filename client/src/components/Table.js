import React from "react";
import { Button } from 'react-bootstrap';
// import "./styles.css";
import CsvDownloader from 'react-csv-downloader';

import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import MultiSelectEditor from "react-tabulator/lib/editors/MultiSelectEditor";

import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)

// for React 16.4.x use: import { ReactTabulator } - example in github repo.
import { React15Tabulator, reactFormatter } from "react-tabulator"; // for React 15.x

function SimpleButton(props: any) {
  const cellData = props.cell._cell.row.data;
  return <button onClick={() => props.onSelect(cellData.name)}>Show</button>;
}

const data = [
  {
    id: 1,
    date: "November 4, 2019 01:21PM",
    text: "KMY98M",
    from: "+254 704868223",
    
   
  },
  {
    id: 2,
    date: "November 5, 2019 01:21PM",
    text: "KMH98M",
    from: "+254 784567223",
    
   
  },
  {
    id: 3,
    date: "November 6, 2019 01:21PM",
    text: "KMY98M",
    from: "+254 797858223",
  },
  {
    id: 4,
    date: "November 4, 2019 01:21PM",
    text: "KMY34R",
    from: "+254 704868223",
  },
  {
    id: 5,
    date: "December 9, 2019 01:21PM",
    text: "KMY98M",
    from: "+254 704868223",
  },
  {
    id: 6,
    date: "December 4, 2019 01:21PM",
    text: "KCB23K",
    from: "+254 72398593",
  },
  {
    id: 7,
    date: "December 4, 2019 07:21PM",
    text: "KMY98M",
    from: "+254 704868223",
  }
];

// Editable Example:
const colorOptions = {
  [""]: "&nbsp;",
  red: "red",
  green: "green",
  yellow: "yellow"
};
const petOptions = [
  { id: "cat", name: "cat" },
  { id: "dog", name: "dog" },
  { id: "fish", name: "fish" }
];
const editableColumns = [
  {
    title: "Name",
    field: "name",
    width: 150,
    editor: "input",
    headerFilter: "input"
  },
  {
    title: "Age",
    field: "age",
    align: "left",
    formatter: "progress",
    editor: "progress"
  },
  {
    title: "Favourite Color",
    field: "color",
    editor: "select",
    editorParams: {
      allowEmpty: true,
      showListOnEmpty: true,
      values: colorOptions
    },
    headerFilter: "select",
    headerFilterParams: { values: colorOptions }
  },
  {
    title: "Date Of Birth",
    field: "dob",
    editor: DateEditor,
    editorParams: { format: "MM/dd/yyyy" }
  },
  {
    title: "Pets",
    field: "pets",
    editor: MultiSelectEditor,
    editorParams: { values: petOptions },
    formatter: MultiValueFormatter,
    formatterParams: { style: "PILL" }
  },
  {
    title: "Passed?",
    field: "passed",
    align: "center",
    formatter: "tickCross",
    editor: true
  }
];

class Table extends React.Component {
  state = {
    data: [],
    selectedName: ""
  };
  ref = null;

  columns = [
    { title: "Date", field: "date", width: 150 },
    
    { title: "Text", field: "text" },
    { title: "From", field: "from" },
    
   
  ];

  rowClick = (e, row) => {
    console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    console.log("rowClick id: ${row.getData().id}", row, e);
    this.setState({ selectedName: row.getData().name });
  };

  setData = () => {
    this.setState({ data });
  };

  clearData = () => {
    this.setState({ data: [] });
  };

  render() {

    const columns = [{
      id: 'date',
      displayName: 'Date'
    }, {
      id: 'text',
      displayName: 'Text'
    }, {
      id: 'from',
      displayName: 'From'
    }];
    const datas =[
      {
        id: 1,
        date: "November 4, 2019 01:21PM",
        text: "KMY98M",
        from: "+254 704868223",
        
       
      },
      {
        id: 2,
        date: "November 5, 2019 01:21PM",
        text: "KMH98M",
        from: "+254 784567223",
        
       
      },
      {
        id: 3,
        date: "November 6, 2019 01:21PM",
        text: "KMY98M",
        from: "+254 797858223",
      },
      {
        id: 4,
        date: "November 4, 2019 01:21PM",
        text: "KMY34R",
        from: "+254 704868223",
      },
      {
        id: 5,
        date: "December 9, 2019 01:21PM",
        text: "KMY98M",
        from: "+254 704868223",
      },
      {
        id: 6,
        date: "December 4, 2019 01:21PM",
        text: "KCB23K",
        from: "+254 72398593",
      },
      {
        id: 7,
        date: "November 4, 2019 01:21PM",
        text: "KMY98M",
        from: "+254 704868223",
      }
    ];
      
    const options = {
      height: 500,
      movableRows: false

     
    };
    return (
      <div>
      
        {/* <React15Tabulator
          ref={ref => (this.ref = ref)}
          columns={this.columns}
          data={data}
          rowClick={this.rowClick}
          options={options}
          data-custom-attr="test-custom-attribute"
          className="custom-css-class"
        />
         <div>Selected Name: {this.state.selectedName}</div>*/}

        <h3>
          {/* Asynchronous data: (e.g. fetch) -{" "} */}
          <button onClick={this.setData} style={{backgroundColor: "lightblue"}}>Set Data</button>
          <button onClick={this.clearData}>Clear</button>
         
         <CsvDownloader
        filename="messagelogs"
        separator=";"
        columns={columns}
        datas={datas}
        variant="info"
        text="Download csv" />
        </h3>
       
        <React15Tabulator columns={this.columns} data={this.state.data} options={options}/>
       
{/* 
        <h3>Editable Table</h3>
        <React15Tabulator
          columns={editableColumns}
          data={data}
          footerElement={<span>Footer</span>}
        /> */}

       
      </div>
    );
  }
}

export default Table;
