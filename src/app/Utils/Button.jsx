// eslint-disable-next-line react/prop-types
function Button(props) {
    return (
        <button className="bg-blue-600 w-16 h-8 text-white">
            <p>
                {props.text}
            </p>
        </button>
    )
}
export default Button