import React, { Component } from "react";
import gamePlaceholder from "../images/game-placeholder.jpg";
import { Link } from "react-router-dom";
import { GameContext } from "../context";

export default class SingleGame extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      gamePlaceholder: gamePlaceholder
    };
  }
  static contextType = GameContext;

  render() {
    const { getGame } = this.context;
    const game = getGame(this.state.slug);

    if (!game) {
      return (
        <div className="error">
          <h3> Juego no existe</h3>
          <Link to="/games" className="btn-primary">
            Regresar a la libreria de juegos
          </Link>
        </div>
      );
    }
    const { name, description, category, topic, images } = game;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <section className="single-game">
          <div className="single-game-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
              // <img key={index} src={images[0]} alt={name} />
            ))}
          </div>
          <div className="single-game-info">
            <article className="desc">
              <h3>Detalles</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Informacion</h3>
              <h6>Tema : {topic}</h6>
              <h6>Categoria :{category}</h6>
            </article>
          </div>
        </section>
      </>
    );
  }
}
