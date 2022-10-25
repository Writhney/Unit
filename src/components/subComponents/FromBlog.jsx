const FromBlog = ({Blog}) => {
    const {hrf,image,description,date} = Blog;
    console.log(Blog);
    return (<>
        <a class="resources__container-blog-items-link" href={hrf}>
            <figure class="resources__container-blog-items-link-container-img">
                <img class="resources__container-blog-items-link-img" src={image} alt="Unit|intuit"/>
            </figure>
            <h3 class="resources__container-blog-items-link-about">{description}</h3>
            <h4 class="resources__container-blog-items-link-date">{date}</h4>
        </a>
    </>  );
}
 
export default FromBlog;