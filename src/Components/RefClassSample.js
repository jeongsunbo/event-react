import React, { Component } from 'react';
import './RefSample.css';
class RefClassSample extends Component {
    input = React.createRef();
    state = {
        password:'',
        clicked: false,
        validated: false,
    }
    handleChange = (e) => {
        this.setState({
            password: this.input.current.value
        })
    }
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password ==='0000',   //일치하면 true 아니면 false
        })
        // DOM요소 접근은 ref.current
        console.log(this.input);       //{current: input}
        this.input.current.focus();
    }
    render() {
        return (
            <div>
                {/* 선택하려는 DOM요소의 ref속성으로 지정해줌 */}
                <input 
                ref={this.input}
                type='password' 
                value={this.state.password} 
                onChange={this.handleChange} 
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>확인</button>
            </div>
        );
    }
}

export default RefClassSample;