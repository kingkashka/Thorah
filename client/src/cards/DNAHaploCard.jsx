function DNAHaploCard(props){
    const {label, title, image, info} = props
    return(
        <>
        <div className="DNACard">
            <h2>{title}</h2>
            <label>{label}</label>
            <p>{info}</p>
            <img src={image} alt="" />
          </div>
        </>
    )
}
export default DNAHaploCard;