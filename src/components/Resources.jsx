import { useState,useEffect } from 'react';
import '../style/css/Resources.css';
import ResourcesPrincipal from './subComponents/ResourcesPrincipal';
import ResourceSecundary from './subComponents/ResourceSecundary';
import FromBlog from './subComponents/FromBlog';
import axios from 'axios';

const Resources = () => {
    const [Card, setCard] = useState([]);
    const [Blog, setBlog] = useState([]);
    //let filter = ''
    //const recurso = `/Guides`;
    const endpoint = `${process.env.REACT_APP_URL_API}`;

    useEffect(() => {
        const apiCard = async ()=>{
          try {
              const response = await axios.get(endpoint);
              const data = response.data;
              console.log('Datos Guides',data.Guides);


              const response1 = await axios.get(endpoint);
              const data1 = response1.data;
              console.log('Datos blog',data.FromTheBlog);
  
              setCard(data.Guides);
              setBlog(data1.FromTheBlog);
              
          } catch (error) {
              console.log(error);
          }finally{
              console.log('Se consulto a la api');
          }
        }
        apiCard();
  
      }, []);

    return ( 
    <section className="resources">
      <div className="resources__container" id="resourcesContainer">
        <h1 className="resources__principal-title">Resources</h1>
        <h2 className="resources__title">Discover insights and trends</h2>
        <h3 className="resources__subtitle">Guides</h3>
        
        
        <figure className='svg-container'>
          <img className='svg svg--mod' src="https://content.visitgozo.com/content/2017/03/Blackline.png" alt="Linea de Separacion"/>
        </figure>

        <div className="resources__container-resources">
            <div className="resources__container-resources-principal"
            id="resourcesContainerResourcesPrincipal">
                {
                    Card.map((Card) => {
                      return(
                        Card.type === 'primary' ? 
                        (
                        
                        <ResourcesPrincipal
                        Card = {Card}
                        />
                        ):
                        (<></>)
                        )
                    })
                }
                
            </div>
            {
                Card.map((Card) => {
                  return(
                    Card.type === 'secundary' ? 
                    (
                    
                    <ResourceSecundary
                    Card = {Card}
                    />
                    ):
                    (<></>)
                    )
                })
            }
            
            
            
        </div>
        
        <div className="resources__container-blog" id="resourcesContainerBlog">
          <h3 className="resources__container-blog-title">From the blog</h3>
          <figure className='svg-container'>
          <img className='svg svg--mod' src="https://content.visitgozo.com/content/2017/03/Blackline.png" alt="Linea de Separacion"/>
          </figure>
          <div className="resources__container-blog-items" id="resourcesContainerBlogItems">
            {
              Blog.map((Blog)=>{
                return (
                <FromBlog
                  Blog = {Blog}
              />)
              })
              
            }

          </div>
        </div>
        <div className="resources__container-more">
          <figure className="resources__container-more-img-container">
            <img
              className="resources__container-more-arrow"
              src="https://assets-global.website-files.com/613a0c11c446a1558ce5db7e/613a0c11c446a1c40de5dba6_Group.svg"
              alt="flecha"
            />
          </figure>
          <h4 className="resources__container-more-title">View all blog posts</h4>
        </div>
      </div>
    </section>
     );
}
 
export default Resources;