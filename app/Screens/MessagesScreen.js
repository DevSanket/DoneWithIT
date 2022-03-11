import { FlatList,View } from "react-native";
import React,{useState} from "react";
import ListItem from "../Components/ListItem";
import Screen from "../Components/Screen";
import ListItemSeparator from "../Components/ListItemSeparator";
import ListItemDeleteAction from "../Components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {

  const [messages,setMessages] = useState(initialMessages);
  const [refreshing,setRefreshing] = useState(false);

  const handleDelete = message => {
    //Delete the message
    const newMessages = messages.filter(m => m.id !== message.id);
    setMessages(newMessages);
  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected")}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            }
          ])
        }}
      />
    </Screen>
  );
}


