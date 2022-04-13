import React, {useState} from 'react';

const FunctionalCounter = (props) => {
    const [counter, setCounter] = useState(0);

    return (
        <div className='counter'>
                <h2>Functional Component  </h2>
                <div className='counter__form'>
                    <input type="text" value={counter} />
                    <button
                        onClick={() => {
                            setCounter(counter + 1);
                        }}>
                        Add 1
                    </button>
                    <button 
                        onClick={() => {
                            setCounter(counter - 1);
                        }}>
                        Minus 1
                    </button>
                    <button 
                        onClick={() => {
                            setCounter(0);
                        }}>
                        Reset
                    </button>
                </div>
        </div>
    );
};

export default FunctionalCounter;