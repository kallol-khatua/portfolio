import "./TechnologyInfoCard.css"

// eslint-disable-next-line react/prop-types
function TechnologyInfoCard({technology, src, alt, shadowColor}) {
  return (
    <div className="TechnologyInfoCard" style={{boxShadow: `0px 3px 5px ${shadowColor}`}}>
      <img src={src} alt={alt} />
      <p>{technology}</p>
    </div>
  )
}

export default TechnologyInfoCard
