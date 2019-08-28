import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TopicContext } from "../altcontext";

export default class SingleTopic extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }
  static contextType = TopicContext;

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { getTopic } = this.context;
    console.log("context: " + this.context + " getTopic " + getTopic);
    const tempTopic = getTopic(this.state.slug);

    if (!tempTopic) {
      return (
        <div className="error">
          <h3> El tema no existe </h3>
          <Link to="/tempTopics" className="btn-primary">
            De vuelta a Pagina principal
          </Link>
        </div>
      );
    }
    const { description, subtopic, topic, images } = tempTopic;

    return (
      <>
        <section className="single-tempTopic">
          <div className="single-tempTopic-info">
            <article className="info">
              <h3>Informacion</h3>
              <h6>Tema : {topic}</h6>
              <h6>Subtema : {subtopic}</h6>
            </article>
            <article className="desc">
              <h3>Detalles</h3>
              <p>{description}</p>
            </article>
          </div>
        </section>
      </>
    );
  }
}
