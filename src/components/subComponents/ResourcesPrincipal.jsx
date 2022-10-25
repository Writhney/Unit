const ResourcesPrincipal = ({Card}) => {
    const {hrf,id,about,description} = Card;
    
    return(
        <div className="resources__container-resources-principal">
            <a className="resources__container-resources-principal-link" href={hrf} key={id}>
                <div className="resources__container-resources-principal-container">
                    <h5 className="resources__container-resources-principal-subtitle">{about}</h5>
                    <h4 className="resources__container-resources-principal-title">{description}</h4>
                </div>
            </a> 
        </div>
    )

}
 
export default ResourcesPrincipal;