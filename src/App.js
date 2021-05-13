import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '5주차_React 기초: 핵심개념, 문법, 간단한 토이 프로젝트',
      checked: true,
    },
    {
      id: 2,
      text: '6주차_React 퍼블리싱',
      checked: true,
    },
    {
      id: 3,
      text: '7주차_React 응용 : 파일 구조와 hook',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },
    [todos],
  );


  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

  const onToggle = useCallback(id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ?
          { ...todo, checked: !todo.checked }
          : todo
      )
    );
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );

}

export default App;