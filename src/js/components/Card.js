import React from 'react';

const Card = () => {
    return (
        <div className="container d-flex justify-content-evenly mt-5" >

            <div className="card" style={{ width: "18rem" }}>
                <img src="https://get.wallhere.com/photo/1920x1080-px-background-Blo0p-blue-marvel-minimalistic-superheroes-Thor-1688663.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Thor</h5>
                    <p className="card-text">Thor es un superhéroe y dios del trueno asgardiano, poseedor del martillo encantado Mjolnir, que le otorga la capacidad de volar y manipular el clima entre sus otros atributos sobrehumanos.</p>
                    <a href="https://es.wikipedia.org/wiki/Thor_(c%C3%B3mic)" target="_blank" rel="noreferrer" className="btn btn-primary">Ver Más</a>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
                <img src="https://get.wallhere.com/photo/illustration-minimalism-red-yellow-superhero-Iron-Man-Blo0p-hand-shape-number-1920x1080-px-computer-wallpaper-font-Heroes-541258.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Iron Man</h5>
                    <p className="card-text">Iron Man es un superhéroe que posee un traje con armas y otros dispositivos tecnológicos que diseñó él mismo, y que le otorga características sobrehumanas que usa para proteger al mundo.</p>
                    <a href="https://es.wikipedia.org/wiki/Iron_Man" target="_blank" rel="noreferrer" className="btn btn-primary">Ver Más</a>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
                <img src="https://get.wallhere.com/photo/2560x1600-px-action-man-marvel-spider-spiderman-superhero-1683835.jpg" style={{ height: "160px" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Spider-Man</h5>
                    <p className="card-text">Spider-Man es un superhéroe que emplea sus habilidades sobrehumanas, reminiscentes de una araña, para combatir a otros supervillanos que persiguen fines siniestros.</p>
                    <a href="https://es.wikipedia.org/wiki/Spider-Man" target="_blank" rel="noreferrer" className="btn btn-primary">Ver Más</a>
                </div>
            </div>
        </div>
    );
}

export default Card;