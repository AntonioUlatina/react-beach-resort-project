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

  componentDidMount() {
    let topics = this.formatData(items);

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

    if (grade !== "all") {
      tempTopics = tempTopics.filter(topic => topic.grade === grade);
    }
    // filter by topic
    if (topic !== "all") {
      tempTopics = tempTopics.filter(topic => topic.topic === topic);
    }

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
