import FilterType from "../model/FilterType";
import Task from "../model/Task";
import TasksList from "../model/TasksList";

const initialTasks: Task[] = [
    Task.createActive(1, "Estudar Next"),
    Task.createCompleted(2, "Atualizar Currículo"),
    Task.createActive(3, "Tirar Passaporte")
]

export default new TasksList(initialTasks, FilterType.None)