import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const Insert = styled.form`
    display:flex;
    background: #495057;
`
const Input = styled.input`
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color:white;
    flex: 1;
    &::placeholder{
        color: #dee2e6;
    }
`

const Button = styled.button`
    outline: none;
    border:none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    transition: 0.1s background ease-in;
    cursor: pointer;
    &:hover{
        background: #adb5bd;
    }
`

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    // useCallback : 렌더링될 때마다 함수를 새로 만들지 않기 때문에 효율적이다.
    const onInputChange = useCallback((e) => {
        setValue(e.target.value);
        console.log(value);
    }, []);

    const onSubmit = useCallback((e) => {
        onInsert(value);
        setValue('');
        e.preventDefault(); // onSubmit은 새로고침 유발 -> e.preventDefault()로 새로고침 막음
    }, [onInsert, value]);

    return (
        <Insert onSubmit={onSubmit}>
            <Input placeholder="할 일을 입력하세요" value={value} onChange={onInputChange} />
            <Button type="submit">
                <MdAdd />
            </Button>
        </Insert>
    )
}

export default TodoInsert;