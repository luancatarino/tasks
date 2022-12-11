export default function Header(props: any) {
    return (
        <div className="flex h-1/3">
            <div
                className={`
            flex flex-1 justify-center items-center h-full
            bg-gradient-to-r from-purple-600 via-transparent to-blue-600
        `}
            >
                {props.children}
            </div>
        </div>
    );
}
