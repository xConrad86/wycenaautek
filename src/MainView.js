import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import {GetHead} from './sAnalyze.jsx';
import {FormView} from './sAnalyzeForm.jsx';
import carIcon from './images/bmw_3.jpg';
import styles from './appStyles.module.css';
//import styles from './myStyles.css';

export function MainView(){    

    const mystyle = {
        color: "white",
        backgroundColor: "LightGray",        
        fontFamily: "Arial",                
        fontSize: "10px",        
        width: "50%;"
    };
    
    return (           
        
            <div className="mainView">
                <h1 className={mystyle}>                                               
                    <img src={carIcon} style={mystyle}/>
                </h1>             
                <FormView />
                <GetHead />            
            </div>
            
        );                
}
 // unused  <GetHead />
var SecondView = function (){    
    
    return (           
            <div className="SecondView">
             <h1>co robic?? panie ?</h1>  
            </div>
        );                
}

export default MainView;
