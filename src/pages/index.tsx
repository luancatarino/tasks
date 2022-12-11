import { useState } from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import Content from "../components/Template/content";
import Header from "../components/Template/header";
import initialTasks from "../data/mock";
import Task from "../model/Task";
import TasksList from "../model/TasksList";

export default function Home() {
    const [tasks, setTasks] = useState(initialTasks);

    const changed = (newTasks: TasksList) => {
        setTasks(newTasks);
    };

    const newTaskCreated = (newTask: Task) => {
        setTasks(tasks.addTask(newTask));
    };

    return (
        <div
            className={` 
                flex flex-col 
                h-screen
                bg-gray-300
            `}
        >
            <Header>
                <Form newTaskCreated={newTaskCreated} />
            </Header>
            <Content>
                <List tasks={tasks} changed={changed} />
            </Content>
        </div>
    );
}
