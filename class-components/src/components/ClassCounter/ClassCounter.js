import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 }
    }

    render() {
        return (
            <div className='counter'>
                <h2>Class Component </h2>
                <div className='counter__form'>
                    <input type="text" value={this.state.counter} />
                    <button 
                        onClick={() => {
                            this.setState({...this.state, counter: this.state.counter + 1 });
                        }}>
                        Add 1
                    </button>
                    <button 
                        onClick={() => {
                            this.setState({...this.state, counter: this.state.counter - 1 });
                        }}>
                        Minus 1
                    </button>
                    <button 
                        onClick={() => {
                            this.setState({...this.state, counter: this.state.counter = 0 });
                        }}>
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}

export default ClassCounter;