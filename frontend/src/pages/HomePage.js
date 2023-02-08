import React from "react";
import '../styles/components/pages/HomePage.css';
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="Avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis enim quis excepturi illo eveniet impedit
                        necessitatibus neque culpa molestias alias! Voluptatibus enim odit dicta temporibus, soluta accusantium voluptatum
                        dolores minima.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus suscipit iste hic magnam assumenda
                        doloremque neque! Officia ullam natus consequuntur eaque corporis iure, distinctio fuga, sunt praesentium neque
                        voluptatem.
                    </p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">-Simplemente Exelente</span>
                        <span className="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default HomePage;