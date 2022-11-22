import initialTasks from "../data/mock";

export default function Home() {
    let tasks = initialTasks;
    tasks = tasks.filterActives()
    tasks = tasks.filterCompleted()
    // tasks = tasks.removeFilter()
    tasks = tasks.deleteCompleted()

    const renderTasks = () => {
        return tasks.items.map((task) => {
            return (
                <div key={task.id}>
                    <span>{task.id} | </span>
                    <span>{task.description} | </span>
                    <span>{task.completed ? "Completed" : "Active"}</span>
                </div>
            );
        });
    };

    return (
        <div
            className={` 
                flex flex-col 
                justify-center 
                items-center 
                text-white 
                bg-purple-600 
                h-screen
            `}
        >
            {renderTasks()}
        </div>
    );
}
