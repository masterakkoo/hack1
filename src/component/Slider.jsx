import React from "react";
import "../css/Slider.css"
import i1 from "../images/i1.jpg"
import i2 from "../images/i2.jpg"
import i3 from "../images/i3.jpg"
const Slider = () => {
    return (<>
        {/* <!-- Carousel wrapper --> */}
        <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
            {/* <!-- Indicators --> */}
            <div class="carousel-indicators">
                <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>

            {/* <!-- Inner --> */}
            <div class="carousel-inner">
                {/* <!-- Single item --> */}
                <div class="carousel-item active">
                    <img src={i1} />
                    <div class="carousel-caption d-none d-md-block">
                        {/* <h5>FRAN LEBOWITZ</h5>
                        <p>"In real life, I assure you there is no such thing as algebra."</p> */}
                    </div>
                </div>

                {/* <!-- Single item --> */}
                <div class="carousel-item">
                    <img src={i2} class="d-block w-100" alt="Canyon at Nigh" />
                    <div class="carousel-caption d-none d-md-block">
                        {/* <h5>Chanakya</h5>
                        <p>"Books are as useful to a stupid person as a mirroe is useful to a blind person."</p> */}
                    </div>
                </div>

                {/* <!-- Single item --> */}
                <div class="carousel-item">
                    <img src={i3} class="d-block w-100" alt="Cliff Above a Stormy Sea" />
                    <div class="carousel-caption d-none d-md-block">
                        {/* <h5>Jawarlal Nehru</h5>
                        <p>"The policy of being too cautious is the greatest risk of all."</p> */}
                    </div>
                </div>
            </div>
            {/* <!-- Inner --> */}

            {/* <!-- Controls --> */}
            <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        {/* <!-- Carousel wrapper --> */}
    </>)
};

export default Slider;