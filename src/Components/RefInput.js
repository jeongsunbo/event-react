import React, { Component } from 'react';

class RefInput extends Component {
    // ref생성
    input = React.createRef();
    handleFocus = () => {
        this.input.current.focus();
        console.log(this.input.current.value);
    }
    render() {
        return (
            <div>
                <input ref={this.input} onChange={this.handleFocus}/>
            </div>
        );
    }
}

export default RefInput;