import React from 'react';
import './ToDoItem.css';
//Эта функция должна экспортироваться из этого файла
//вместо скобочек пишем props;
// const ToDoItem = () => {
const ToDoItem = props => {
    const resolvedClass = {
        textDecoration: 'line-through'

    }
    return (
        <div className="todo-item">
            <div className="description-wrapper">
                {/*<p>Описание задачи</p>*/}
                <p style={props.completed === true ? resolvedClass : {}}>
                    {props.description}
                </p>
            </div>
            <div className="input-wrapper">
                {/*на импут должны повесить обработчик событий*/}
                <input
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={props.handleChange}
                />
            </div>
        </div>
    )
}

export default ToDoItem;
