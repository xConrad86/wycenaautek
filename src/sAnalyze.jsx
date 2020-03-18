import React from 'react';
import ReactDOM from 'react-dom'; 
import {GetResults} from "./sAnalyzeResults.jsx"
//how to change state on website by actualaizing hour/date

export class GetHead extends React.Component{   
        constructor(props) {
          super(props);
          this.state = {date: new Date()};          
        }
      
        render() {
            
            const mystyle = {
                color: "white",                
                backgroundColor: "#000000",
                padding: "10px",
                fontFamily: "Arial",                
                fontSize: "12px",
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center"
                
            };
          //unused in return    <h2>Actual time: {this.state.date.toLocaleTimeString()}.</h2>              
          return (
            <div style = {mystyle}>              
              <div>Contact</div>             
              <div>Useful links</div>             
            </div>
          );

        }
      
        componentDidMount() {
            this.timerID = setInterval(
              () => this.tick(),
              1000
            );
          }
        
        componentWillUnmount() {
            clearInterval(this.timerID);
          }
        
          tick() {
            this.setState({
              date: new Date()
            });
          }
    }
      
    ReactDOM.render(
        <GetHead />,
        document.getElementById('root')
      );
