import TasksList from "../../model/TasksList";
import ListButton from "./ListButton";
import ListFooter from "./ListFooter";
import ListItem from "./ListItem";

interface ListProps {
    tasks: TasksList;
    changed: (tasks: TasksList) => void;
}

export default function List(props: ListProps) {
    const { tasks } = props;

    const renderTasks = () => {
        return tasks.items.map((task) => {
            return (
                <ListItem
                    key={task.id}
                    value={task.description}
                    completed={task.completed}
                    changeStatus={() => {
                        const modifiedTask = task.changeStatus();
                        const newList = tasks.modifyTask(modifiedTask);
                        props.changed(newList);
                    }}
                />
            );
        });
    };

    return (
        <div
            className={`
            flex w-3/5
        `}
        >
            <ul
                className={`
                w-full list-none
                bg-white shadow-lg rounded-lg
            `}
            >
                {renderTasks()}
                <ListFooter tasks={props.tasks} changed={props.changed} />
            </ul>
        </div>
    );
}
