import Selection from "./Selection"

interface ListItemProps {
    value: string
    completed: boolean
    changeStatus: () => void
}

export default function ListItem(props:ListItemProps) {

    const textStyle = props.completed ? "line-through text-gray-300" : "text-gray-500"

    return (<li onClick={props.changeStatus} className={`
        bg-white
        text-black text-xl
        p-5
        border-b border-gray-400
        cursor-pointer
        flex items-center
    `}>
        <Selection value={props.completed} />
        <span className={`
            font-light
            ml-5
            ${textStyle}
        `}>{props.value}</span>

    </li>)
}