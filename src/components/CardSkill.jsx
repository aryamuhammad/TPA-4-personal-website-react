import PropTypes from "prop-types"
const CardSkill = (props)=>{
    return (
        <>
        <div className="card-skills">
            <img src={props.skillImage} alt="" />
            <h3 className="fw-bold">{props.skillName}</h3>
        </div>
        
        </>
    )
}

CardSkill.propTypes = {
    skillName:PropTypes.string
}
export default CardSkill