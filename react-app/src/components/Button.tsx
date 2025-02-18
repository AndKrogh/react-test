interface Props {
    children: string;
    color?: 'primary' | 'secondary';
    onClick: () => void;
}

const button = ({ children, onClick, color = 'primary' }: Props) => {
    return <button type="button" className={'btn btn-' + color} onClick={onClick}>{children}</button>
}

export default button;