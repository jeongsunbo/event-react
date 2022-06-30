import React,{ useState,useRef } from 'react';
//rsc
//함수형
const EventInput = () => {
    const input = useRef();
    const [form, setForm ] = useState({
        username: "",
        message: "",
    });
    const { username, message } = form; //구조분해할당
    const onChange = (e) => {
        // const nextForm = {
        //     ...form,    // 기존의 form내용을 여기에 복사
        //     [e.target.name]: e.target.value     // 원하는 값은 덮어 씌우기
        // }
        // setForm(nextForm);
        const { name, value } = e.target;
        setForm({
            ...form, //스프레드 구문
            [name]: value,
        });
    }
    // 버튼 클릭시 실행 할 함수
    const onClick = () => {
        console.log(`메세지는 ${message}이고 유저네임은 ${username}이다.`);
        setForm({
            username: "",
            message: "",
        });
        input.current.focus();
    }
    const onKeyPress = (e) => {
        if(e.key === "Enter"){
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type='text' ref = {input} name='username' value={username} onChange={onChange} onKeyPress={onKeyPress}></input>
            <input type='text' name='message' value={message} onChange={onChange} onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventInput;