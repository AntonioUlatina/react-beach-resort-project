import React, { Component } from "react";
import items from "./altdata";

const TopicContext = React.createContext();

export default class TopicProvider extends Component {
  state = {
    topics: [],
    sortedTopics: [],
    grade: "Quarto",
    topic: "Historia"
  };

  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_grade: "beachResortTopic"
  //     });
  //     let topics = this.formatData(response.items);

  //     let featuredTopics = topics.filter(topic => topic.featured === true);
  //     //
  //     let maxTopic = Math.max(...topics.map(item => item.topic));
  //     let maxSize = Math.max(...topics.map(item => item.subtopic));
  //     this.setState({
  //       topics,
  //       featuredTopics,
  //       sortedTopics: topics,
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
  //   let topics = this.formatData(items);
  //   let featuredTopics = topics.filter(topic => topic.featured === true);
  //   //
  //   // let topic = Math.max(...topics.map(item => item.topic));
  //   // let maxSize = Math.max(...topics.map(item => item.subtopic));
  //   this.setState({
  //     topics,
  //     featuredTopics,
  //     sortedTopics: topics,
  //     loading: false
  //   });
  // }
  componentDidMount() {
    // this.getData();
    let topics = this.formatData(items);
    //
    // let topic = Math.max(...topics.map(item => item.topic));
    // let maxSize = Math.max(...topics.map(item => item.subtopic));
    this.setState({
      topics,
      sortedTopics: topics
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;

      let topic = { ...item.fields, id };
      console.log("id " + id + "topic " + topic);
      return topic;
    });
    console.log("tempItems " + tempItems);
    return tempItems;
  }
  getTopic = slug => {
    let tempTopics = [...this.state.topics];
    const topic = tempTopics.find(topic => topic.slug === slug);
    return topic;
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
      this.filterTopics
    );
  };
  filterTopics = () => {
    let { topics, grade, topic } = this.state;

    let tempTopics = [...topics];
    // transform values
    // get category
    // topic = parseInt(topic);
    // filter by grade
    if (grade !== "all") {
      tempTopics = tempTopics.filter(topic => topic.grade === grade);
    }
    // filter by topic
    if (topic !== "all") {
      tempTopics = tempTopics.filter(topic => topic.topic === topic);
    }
    // // filter by topic
    // tempTopics = tempTopics.filter(topic => topic.topic <= topic);
    // //filter by subtopic
    // tempTopics = tempTopics.filter(
    //   topic => topic.subtopic >= minSize && topic.subtopic <= maxSize
    // );
    //filter by reviewCount
    // if (reviewCount) {
    //   tempTopics = tempTopics.filter(topic => topic.reviewCount === true);
    // }
    // //filter by rating
    // if (rating) {
    //   tempTopics = tempTopics.filter(topic => topic.rating === true);
    // }
    this.setState({
      sortedTopics: tempTopics
    });
  };
  render() {
    return (
      <TopicContext.Provider
        value={{
          ...this.state,
          getTopic: this.getTopic,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </TopicContext.Provider>
    );
  }
}
const TopicConsumer = TopicContext.Consumer;

export { TopicProvider, TopicConsumer, TopicContext };

export function withTopicConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <TopicConsumer>
        {value => <Component {...props} context={value} />}
      </TopicConsumer>
    );
  };
}
