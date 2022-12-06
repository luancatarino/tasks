import TasksList from "../../model/TasksList";
import ListButton from "./ListButton";

interface ListFooterProps {
    tasks: TasksList;
    changed: (tasks: TasksList) => void;
}

export default function ListFooter(props: ListFooterProps) {
    const { tasks, changed } = props;

    const renderQuantityItems = () => {
        return (
            <>
                <span className="text-gray-300 hidden lg:inline">
                    {tasks.quantity}
                    {tasks.quantity === 0 ? " No Task Found" : tasks.quantity === 1 ? " Task Found" : " Tasks Found"}
                </span>
                <span className="flex-1 hidden lg:inline"></span>
            </>
        );
    };

    const renderButtonFilter = () => {
        return (
            <>
                <ListButton selected={tasks.showAll()} onClick={() => changed(tasks.removeFilter())} className="hidden md:inline">
                    All
                </ListButton>
                <ListButton selected={tasks.showOnlyActives()} onClick={() => changed(tasks.filterActives())} className="mx-4">
                    Actives
                </ListButton>
                <ListButton selected={tasks.showOnlyCompleted()} onClick={() => changed(tasks.filterCompleted())}>
                    Completed
                </ListButton>
            </>
        );
    };

    const renderDeleteCompleted = () => {
        return (
            <>
                {" "}
                <span className="flex-1"></span>
                <ListButton onClick={() => changed(tasks.deleteCompleted())}>
                    Delete <span className="hidden md:inline">Completed</span>
                </ListButton>
            </>
        );
    };

    return (
        <li className={`flex p-5`}>
            {renderQuantityItems()}
            {renderButtonFilter()}
            {renderDeleteCompleted()}
        </li>
    );
}
