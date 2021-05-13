import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import styled from 'styled-components';

const ListItem = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    &:nth-child(even){
        background: #f8f9fa;
    }
    &+&{
        border-top:1px solid #dee2e6;
    }
`

const CheckBox = styled.div`
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg{
        font-size: 1.5rem;
    }
`

const Text = styled.div`
    margin-left: 0.5rem;
    flex:1;
`

const Remove = styled.div`
    display: flex;
    align-items:center;
    font-size:1.5rem;
    color:#ff6b6b;
    cursor: pointer;
    &:hover{
        color:#ff8787;
    }
`

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;
    return (
        <ListItem>
            {checked ?
                <CheckBox onClick={() => onToggle(id)}>
                    <MdCheckBox />
                    <Text style={{ textDecoration: 'line-through', color: "#dee2e6" }}>{text}</Text>
                </CheckBox>
                :
                <CheckBox onClick={() => onToggle(id)}>
                    <MdCheckBoxOutlineBlank />
                    <Text>{text}</Text>
                </CheckBox>
            }
            <Remove onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </Remove>
        </ListItem>
    )
}

export default TodoListItem;
