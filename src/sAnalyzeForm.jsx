import React from 'react';
import ReactDOM from 'react-dom'; 
import {GetResults} from "./sAnalyzeResults.jsx"

export class FormView extends React.Component{
     constructor(props){
     super(props);
      this.state = "konrad"  
    } 

    //alignItems: "center",
           // textAlign: "center",
           // justifyContent: "center",
    render()    
    {
        const myStyle = {
            color: "Black",
            backgroundColor: "LightGray",            
            
            fontFamily: "Arial",                
            fontSize: "20px",                        
            display: "inline-block",
            marginRight:"20px",
            width:"100%",
            padding:"30px"
        }

        const itemBlock = {
            display: "inline-block",            
            marginRight:"20px"            
        }        

        return (
            <div>                
                <form name="cars" style = {myStyle}>
                    <div name = "carsMMRR" style = {itemBlock}>
                        <div style = {itemBlock}>Mark:
                            <select name="marks">
                                <option value="1">Mercedes</option>
                                <option value="2">BMW</option>
                                <option value="3">Fiat</option>
                                <option value="4">Audi</option>
                                <option value="5">Aston martin</option>                                
                            </select>
                        </div>   
                        <div style = {itemBlock}>Model:
                            <select name="models">
                                <option value="1">slk 200</option>
                                <option value="2">BMW z3</option>
                                <option value="3">Fiat Punto</option>
                                <option value="4">Audi A3</option>
                                <option value="5">Lamborghini Diablo</option>
                            </select> 
                        </div>
                        <div style = {itemBlock}>Year from:
                            <input type="text" list="yearFrom" />
                            <datalist id="yearFrom">
                                <option>2013</option>
                                <option>2014</option>
                                <option>2015</option>
                                <option>2016</option>
                            </datalist>
                        </div>
                        <div style = {itemBlock}>Year to:
                            <input type="text" list="yearTo" />
                            <datalist id="yearTo">
                                <option>2013</option>
                                <option>2014</option>
                                <option>2015</option>
                                <option>2016</option>
                            </datalist>
                        </div>
                    </div>
                    <div>
                        <div style = {itemBlock}>Mileage from:
                            <input type="text" list="mileageFrom" />
                            <datalist id="mileageFrom">
                                <option>10000</option>
                                <option>50000</option>
                                <option>100000</option>
                                <option>150000</option>
                            </datalist>
                        </div>
                        <div style = {itemBlock}>Mileage to:
                            <input type="text" list="mileageTo" />
                            <datalist id="mileageTo">
                                <option>10000</option>
                                <option>50000</option>
                                <option>100000</option>
                                <option>200000</option>
                            </datalist>
                        </div>                    
                        <div style = {itemBlock}>Price from:
                            <input type="text" list="priceFrom" />
                            <datalist id="priceFrom">
                                <option>10000</option>
                                <option>50000</option>
                                <option>100000</option>
                                <option>150000</option>
                            </datalist>
                        </div>
                        <div style = {itemBlock}>Price to:
                            <input type="text" list="priceTo" />
                            <datalist id="priceTo">
                                <option>10000</option>
                                <option>50000</option>
                                <option>100000</option>
                                <option>200000</option>
                            </datalist>
                        </div>                    
                    </div>                  
                </form> 
                <div>
                    <ResultsView />
                </div>    
            </div>
        );        
    }
}

var ResultsView = function (){    
    
    return (           
            <GetResults />
        );                
}

ReactDOM.render(
    <FormView />,
    document.getElementById('root')
  );



  