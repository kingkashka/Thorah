function DNAHaploCard(props){
    const {label, title, number, image} = props
    return(
        <>
        <div className="DNACard">
            <h2>{title}</h2>
            <img src={image} alt="" />
            <label>{label}</label>
          </div>
        </>
    )
}
export default DNAHaploCard;