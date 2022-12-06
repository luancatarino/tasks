interface ListButtonProps {
    selected?: boolean;
    className?: string;
    children: any;
    onClick: (event: any) => void;
}

export default function ListButton(props: ListButtonProps) {
    const borderSelected = props.selected ? "border-b-4 border-purple-400" : "";

    return (
        <button
            onClick={props.onClick}
            className={`
            text-gray-500
            font-semibold hover:text-black
            focus:outline-none
            ${borderSelected}
        ${props.className}
    `}
        >
            {props.children}
        </button>
    );
}
