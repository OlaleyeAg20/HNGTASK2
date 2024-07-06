function Form(){
    return (
        <div className="form-container">
            <div className="formHeader">
                <h1>Get Free $100 Indoor Delivery Service Upgrade!</h1>
                <p className="subText">And, be the first to know our latest deals.</p>
            </div>
            <form className="form">
                <input type="email" name="email" placeholder="Enter your email"/>
                <button type="reset" className="button">Subscribe</button>
            </form>
        </div>
    )
}

export default Form