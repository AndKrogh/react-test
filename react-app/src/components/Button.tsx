interface Props {
    children: string;
    onClick: () => void;
}

const button = ({ children, onClick }: Props) => {
    return <button type="button" className="btn btn-primary" onClick={onClick}>{children}</button>
}

export default button;