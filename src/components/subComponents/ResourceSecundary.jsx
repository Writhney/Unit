
const ResourceSecundary = ({Card}) => {
    console.log('CardSec: ',Card);

    const {hrf,image,description,date,id} = Card;
        return (
            <div class="resources__container-resources-secundary">
    <a class="resources__container-resources-secundary-link" href={hrf} key={id}>
        <figure class="resources__container-resources-secundary-info-img-container">
            <img class="resources__container-resources-secundary-info-img" src={image} alt="Guides"/>
        </figure>
        <div class="resources__container-resources-secundary-descriptions-container">
            <h4 class="resources__container-resources-secundary-descriptions">{description}</h4>
            <figure class="resources__container-resources-secundary-container-arrow">
                <img class="resources__container-resources-secundary-arrow" src="https://assets-global.website-files.com/613a0c11c446a1558ce5db7e/613a0c11c446a1c40de5dba6_Group.svg" alt="flecha"/>
            </figure>
        </div>
    </a>
</div>
        );
        

    
}
 
export default ResourceSecundary;