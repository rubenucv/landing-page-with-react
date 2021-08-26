import React from 'react';


const Jumbotron = () => {
    const styleCarousel = {
        maxWidth:'900px',
        maxHeight:'600px',
        margin:'0 auto',
    }

    return (
        <div id="carouselExampleCaptions" style={styleCarousel} className="carousel slide mt-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://wallsdesk.com/wp-content/uploads/2016/12/Thor-Photos.jpg" className="d-block w-100 rounded" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Thor</h5>
                        <p>"El Dios del Trueno"</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://wallsdesk.com/wp-content/uploads/2016/11/Iron-Man-full-HD.jpg" className="d-block w-100 rounded" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Iron Man</h5>
                        <p>"La Armadura Indestructible"</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://wallsdesk.com/wp-content/uploads/2016/11/Spider-Man-Pictures.jpg" className="d-block w-100 rounded" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Spider-Man</h5>
                        <p>"El Arácnido que asecha en la sombra a los criminales"</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Jumbotron;