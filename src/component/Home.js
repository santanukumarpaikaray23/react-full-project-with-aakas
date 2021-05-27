import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component{
  constructor(){
    super()

    this.state={
      news:JSON,
      filtered:JSON

    }
  }

// var a =[4,12,23,56,45,23]
//   a.filter((data)=>{return data>20})
filterNews=(userInput) => {
  const output = this.state.news.filter((data) => {
    return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
  })
  this.setState({filtered:output})

}

  render(){
    return(
      <React.Fragment>
      
      <Header userText={(data) => {this.filterNews(data)}}/>
      <NewsDisplay newsData={this.state.filtered}/>
     
      <Footer year= "2022" month="May"/>
      </React.Fragment>
    )
     
  }
}
  
export default Home;
