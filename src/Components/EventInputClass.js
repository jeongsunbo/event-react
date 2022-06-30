import React, { Component } from 'react';

//rcc
class EventInputClass extends Component {
    state = {
        message: '',
        username: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            //인풋이 여러개일때 name으로 접근 
        })
    }
    handleClick = () => {
        console.log(`메세지는 ${this.state.message}이고 유저네임은 ${this.state.username}이다.`);
        this.setState({
            message: '',
            username: '',
        })
    }
    // 키를 누르면 실행되는 함수(엔터키 누르면 핸들클릭 실행)
    handleKeyPress = (e) => {
        console.log(e);
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type='text' name='message' onChange={this.handleChange} value={this.state.message} onKeyPress={this.handleKeyPress}></input>
                <input type='text' name='username' onChange={this.handleChange} value={this.state.username} onKeyPress={this.handleKeyPress}></input>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventInputClass;