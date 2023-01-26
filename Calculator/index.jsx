import { useReducer } from 'react';
import './style.css'


const Calculator = () => {

    return ( 
        <>      
            <div className="container">
                <div className="display">
                    <div className="previous">Previous</div>
                    <div className="current">Current</div>
                </div>
                <div className="ac">AC</div>
                <div className="del">DEL</div>
                <div>/</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>*</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>+</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>-</div>
                <div>.</div>
                <div>0</div>
                <div className='equal'>=</div>
            </div>
        </>
     );
}
 
export default Calculator;