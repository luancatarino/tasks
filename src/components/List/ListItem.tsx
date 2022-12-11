import Selection from "./Selection";

interface ListItemProps {
    value: string;
    completed: boolean;
    changeStatus: () => void;
}

export default function ListItem(props: ListItemProps) {
    const textStyle = props.completed ? "line-through text-gray-300" : "text-gray-500";

    return (
        <li
            onClick={props.changeStatus}
            className={`
            text-black            
            flex items-center p-5 text-xl
            border-b border-gray-400 cursor-pointer
    `}
        >
            <Selection value={props.completed} />
            <span
                className={`
            font-light
            ml-5
            ${textStyle}
        `}
            >
                {props.value}
            </span>
        </li>
    );
}
