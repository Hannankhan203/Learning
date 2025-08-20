import { useState, useEffect } from "react";

const Todo = () => {
    const [list, setList] = useState([]);

    const init = async () => {
        const request = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await request.json();
        setList(response);
    };

    useEffect(() => {
        init();
    }, []);

    const deleteTodo = (IndexNum) => {
        const allData = [...list];
        allData.splice(IndexNum, 1);
        setList(allData);
    }

    const editTodo = (IndexNum) => {
        const allData = [...list];
        const obj = allData[IndexNum];
        const request = prompt("Update your note", obj.title);
        obj.title = request;
        allData.splice(IndexNum, 1, obj);
        setList(allData);
    }

    return (
        <div>
            <h1>Todo</h1>
            <ul>
                {list.map(({ title }, index) => {
                    return <li key={index}>
                        <span>{title}</span>
                        <div>
                            <button onClick={() => {
                                editTodo(index)
                            }}>Edit</button>
                            <button onClick={() => {
                                deleteTodo(index)
                            }}>Delete</button>
                        </div>
                    </li>
                })
                }
            </ul>
        </div>
    )
}

export default Todo;