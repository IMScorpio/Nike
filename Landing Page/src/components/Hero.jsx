const Hero = () => {
  return (
    <main className="hero container">
        <div className="hero-content">
            <h1>Fashion forward, step by step.</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU
             WITH OUR SHOES.WE’RE HERE TO HELP YOU
             WITH OUR SHOES.WE’RE HERE TO HELP YOU
             WITH OUR SHOES.</p> 
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="btn-2">Category</button>
            </div>
            <div className="shopping">

                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/shoe_image.png" alt="" />
        </div>
    </main>
  )
}

export default Hero
