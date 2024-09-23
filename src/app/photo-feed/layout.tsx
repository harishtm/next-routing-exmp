import "./styles.css";

const PhotoLayout = (props: {
    modal: React.ReactNode,
    children: React.ReactNode
}) => {
    return (
        <>
            { props.modal }
            { props.children }
        </>
    )
}

export default PhotoLayout;