import '../style/css/Standard.css'
const Standard = () => {
    return ( 
    <section className="section-standard">
      <div className="section-standard__container">
        <div className="section-standard__container-title">
          <h4 className="section-standard__title">
            Bring financial features to life and start building — today
          </h4>
          <form className="section-standard__container-title-input-button">
            <input
              className="section-standard__container-title-input"
              type="text"
              placeholder="Enter your address"
              required
            />
            <button className="section-standard__container-title-button">Get Started</button>
          </form>
        </div>
      </div>
    </section>
     );
}
 
export default Standard;