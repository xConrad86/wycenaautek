import React from 'react';
import ReactDOM from 'react-dom'; 
import carIcon from './images/appHead.jpg';


export class GetResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoading: false};
        this.handleClick = this.handleClick.bind(this);
    }

    renderTbl(bTbl) {
        return <rTable value={bTbl} />;
      }

    handleClick() {
        this.setState(state =>            
                 ({
                    isLoading: true
                })                
        );        
    }

        render()
        {
        
            const btnStyle = {
                backgroundColor: "Black",            
                color: "White",
                fontFamily: "Arial",                
                fontSize: "16px"                                     
            }
 //     {this.state.isLoading ?   'Loading data...': this.renderTbl(true)}                
        return(
            <div>
                
                <button onClick={this.handleClick} style ={btnStyle}>Gief Price! {this.state.isLoading}</button>                                
                {
                this.state.isLoading?
                    <div>
                        <CarAnalyze />
                    </div>
                :
                    <div>                
                    </div>                
                
                }

            </div>                    
            
        );
    }    

}

var CarAnalyze = function showTbl()
{   
        const myCarAnalyzeStyle = {
          color: "black",
          backgroundColor: "white",
          padding: "10px",
          fontFamily: "Arial",
          fontSize: "15px",
          fontWeight: "bold",
          alignItems: "left",
          justifyContent: "left",
          display: 'flex',
          flexdirection: 'column',
          alignitems: 'center',
          rightMargin: '50px'
        };
        return(
            <div style = {myCarAnalyzeStyle}> 
                <tr>
                    <div>Main info</div> 
                    <li>Car Name: Mercedes SLK 200</li>
                    <li>Car Price: 100 000 $</li>
                    <li>Avg Price: 80 000 $</li>
                    <li>Avg-Car Price: - 20 000 $</li>
                    <li>Base Price: 200 000 $</li>
                    <li>Year: 2010</li>                    
                    <li>Mileage: 150 000 km</li>            
                    <li backgroundColor = 'Green'>
                        Fair Price: 70 000 $
                        <div>Loose by:</div>
                        <li>Mileage: - 50 000 $</li>
                        <li>Year lost: - 60 000 $</li>
                        <li>Other: - 20 000 $</li>
                    </li>

                                
                </tr>                
                <tr>
                    <div>Additional Info</div> 
                    <div> </div>
                    <div> z</div>
                    <div>Car Name</div>
                    <div>Car Name</div>                 
                    <div></div>
                    <div></div>
                </tr>                
                <img src = {carIcon}></img>
            </div> 
            
        );    
}

ReactDOM.render(
    <GetResults />,
    document.getElementById('root')
  );