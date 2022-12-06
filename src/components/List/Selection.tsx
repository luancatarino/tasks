interface SelectionProps {
    value: boolean
}

export default function Selection(props: SelectionProps) {
    
    const gradient = props.value ? "bg-gradient-to-br from-blue-400 to-purple-500" : ""

    return (<div className={`
    flex justify-center items-center
    rounded-full border border-gray-400 ${gradient}
    cursor-pointer text-white
    h-7 w-7    
    `}>{props.value ? "x" : ""}</div>)
}