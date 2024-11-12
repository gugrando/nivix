function ImageContainer({imageSource, description}) {
    return (
        <div>
            <img className="" src={imageSource} alt="" />
            <p className="">{description}</p>
        </div>
    )
}

export default ImageContainer