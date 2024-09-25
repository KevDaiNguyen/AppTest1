import React from "react"
import ToDoCard from "./ToDoCard"

export default function ToDoList(props) {
    const {todos} = props

    return (
        <ul className="main">
            {todos.map((todo, toDoIndex) => {
                return(
                    <ToDoCard {...props} key={toDoIndex} index={toDoIndex}>
                        <p>
                            {todo}
                        </p>
                    </ToDoCard>
                )
            })}
        </ul>
    )
}