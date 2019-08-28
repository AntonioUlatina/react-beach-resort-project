import React from "react";
import { withTopicConsumer } from "../altcontext";
import TopicsFilter from "./TopicsFilter";
import TopicsList from "./TopicsList";

function TopicContainer({ context }) {
  // const { sortedTopics, topics } = context;
  // console.log(
  //   "sortedTopics " + sortedTopics + " topics " + topics + " context " + context
  // );
  console.log("context: " + context);
  return (
    <>
      {/* <TopicsFilter topics={topics} /> */}
      {/* <TopicsList topics={sortedTopics} /> */}
    </>
  );
}

export default withTopicConsumer(TopicContainer);

// import React from "react";
// import { TopicConsumer } from "../context";
// import Loading from "./Loading";
// import TopicsFilter from "./TopicsFilter";
// import TopicsList from "./TopicsList";
// export default function TopicContainer() {
//   return (
//     <TopicConsumer>
//       {value => {
//         const { loading, setTopic, sortedTopics,topics } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             <TopicsFilter topics={topics} />
//             <TopicsList topics={sortedTopics} setTopic={setTopic} />
//           </>
//         );
//       }}
//     </TopicConsumer>
//   );
// }