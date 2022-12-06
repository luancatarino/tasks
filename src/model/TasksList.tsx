import FilterType from "./FilterType";
import Task from "./Task";

export default class TasksList {
    #all: Task[];
    #filterUsed: FilterType;

    constructor(all: Task[], filterUsed = FilterType.None) {
        this.#all = all;
        this.#filterUsed = filterUsed ?? FilterType.None;
    }

    get items() {
        return this.applyFilterOn(this.#all);
    }

    get quantity() {
        return this.items.length;
    }

    get filterUsed() {
        return this.#filterUsed;
    }

    addTask(newTask:Task): TasksList {
        const all = [...this.#all]
        all.push(newTask)
        return new TasksList(all, this.filterUsed)
    }

    modifyTask(modifiedTask:Task): TasksList {
        const all = this.#all.map(task => {
            return task.id === modifiedTask.id ? modifiedTask : task
        } )
        return new TasksList(all, this.filterUsed)
    }

    filterActives(): TasksList {
        if (!this.showOnlyActives()) {
            return new TasksList(this.#all, FilterType.Actives);
        } else {
            return this;
        }
    }

    filterCompleted(): TasksList {
        if (!this.showOnlyCompleted()) {
            return new TasksList(this.#all, FilterType.Completed);
        } else {
            return this;
        }
    }

    removeFilter(): TasksList {
        if (!this.showAll()) {
            return new TasksList(this.#all, FilterType.None);
        } else {
            return this;
        }
    }

    deleteCompleted() {
        const onlyActives = this.#all.filter((task) => task.active);
        return new TasksList(onlyActives, FilterType.None);
    }

    showAll(): boolean {
        return this.#filterUsed === FilterType.None;
    }

    showOnlyActives(): boolean {
        return this.#filterUsed === FilterType.Actives;
    }

    showOnlyCompleted(): boolean {
        return this.#filterUsed === FilterType.Completed;
    }

    private applyFilterOn(tasks: Task[]): Task[] {
        if (this.showOnlyActives()) {
            return this.applyFilterActives(tasks);
        } else if (this.showOnlyCompleted()) {
            return this.applyFilterCompleted(tasks);
        } else {
            return [...tasks];
        }
    }

    private applyFilterActives(tasks: Task[]): Task[] {
        return tasks.filter((task) => task.active);
    }

    private applyFilterCompleted(tasks: Task[]): Task[] {
        return tasks.filter((task) => task.completed);
    }
}
