import React, { Component } from "react";
import items from "./data";

const GameContext = React.createContext();

export default class GameProvider extends Component {
  state = {
    games: [],
    sortedGames: [],
    featuredGames: [],
    loading: true,
    //
    grade: "Quarto",
    topic: "Historia"
  };

  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_grade: "beachResortGame"
  //     });
  //     let games = this.formatData(response.items);

  //     let featuredGames = games.filter(game => game.featured === true);
  //     //
  //     let maxTopic = Math.max(...games.map(item => item.topic));
  //     let maxSize = Math.max(...games.map(item => item.subtopic));
  //     this.setState({
  //       games,
  //       featuredGames,
  //       sortedGames: games,
  //       loading: false,
  //       //
  //       topic: maxTopic,
  //       maxTopic,
  //       maxSize
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // componentDidUpdate() {
  //   let games = this.formatData(items);
  //   let featuredGames = games.filter(game => game.featured === true);
  //   //
  //   // let topic = Math.max(...games.map(item => item.topic));
  //   // let maxSize = Math.max(...games.map(item => item.subtopic));
  //   this.setState({
  //     games,
  //     featuredGames,
  //     sortedGames: games,
  //     loading: false
  //   });
  // }
  componentWillMount() {
    // this.getData();
    let games = this.formatData(items);
    let featuredGames = games.filter(game => game.featured === true);
    //
    // let topic = Math.max(...games.map(item => item.topic));
    // let maxSize = Math.max(...games.map(item => item.subtopic));
    this.setState({
      games,
      featuredGames,
      sortedGames: games,
      loading: false
      //
      // topic: maxTopic,
      // maxTopic,
      // maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let game = { ...item.fields, images, id };
      return game;
    });
    return tempItems;
  }
  getGame = slug => {
    let tempGames = [...this.state.games];
    const game = tempGames.find(game => game.slug === slug);
    return game;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterGames
    );
  };
  filterGames = () => {
    let { games, grade, topic } = this.state;

    let tempGames = [...games];
    // transform values
    // get category
    // topic = parseInt(topic);
    // filter by grade
    if (grade !== "all") {
      tempGames = tempGames.filter(game => game.grade === grade);
    }
    // filter by topic
    if (topic !== "all") {
      tempGames = tempGames.filter(game => game.topic === topic);
    }
    // // filter by topic
    // tempGames = tempGames.filter(game => game.topic <= topic);
    // //filter by subtopic
    // tempGames = tempGames.filter(
    //   game => game.subtopic >= minSize && game.subtopic <= maxSize
    // );
    //filter by reviewCount
    // if (reviewCount) {
    //   tempGames = tempGames.filter(game => game.reviewCount === true);
    // }
    // //filter by rating
    // if (rating) {
    //   tempGames = tempGames.filter(game => game.rating === true);
    // }
    this.setState({
      sortedGames: tempGames
    });
  };
  render() {
    return (
      <GameContext.Provider
        value={{
          ...this.state,
          getGame: this.getGame,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}
const GameConsumer = GameContext.Consumer;

export { GameProvider, GameConsumer, GameContext };

export function withGameConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <GameConsumer>
        {value => <Component {...props} context={value} />}
      </GameConsumer>
    );
  };
}
