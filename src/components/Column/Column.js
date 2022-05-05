import React from 'react'

import './Column.scss'

import Task from 'components/Task/Task'

function Column() {
    return (
        <div className="column">
            <header>
                Brainstorm
            </header>
            <ul className="task-list">
                <Task />
                <li className="task-item">
                    Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="task-item">
                    Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="task-item">
                    Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="task-item">
                    Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="task-item">
                    Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="task-item">
                    Lorem ipsum dolor sit amet consectetur.
                </li>
            </ul>
            <footer>
                Another card
            </footer>
        </div>
    )
}

export default Column