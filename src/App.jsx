import React from 'react'
import Card from "./Cards"
import Sdata from  "./Sdata"



const App = () =>(
  <>
    <h1 className='heading_style'>List of top JioCinema Movies</h1>
    
    {Sdata.map((val) => {
      return(
    <Card
      key={val.id}
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.links}
    />
    );
    })}
  </>
)

export default App;