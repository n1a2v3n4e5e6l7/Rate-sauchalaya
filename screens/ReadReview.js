import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader";

export default class ReadReview extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      ratingsList: [],
    };
    this.requestRef = null;
  }

  getratingsList = () => {
    this.requestRef = db
      .collection("ratings")
      .onSnapshot((snapshot) => {
        var ratingsList = snapshot.docs.map((doc) => doc.data());
        this.setState({
          ratingsList: ratingsList,
        });
      });
  };

  componentDidMount() {
    this.getratingsList();
  }

  componentWillUnmount() {
  this.requestRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.Location}
        subtitle={item.ratingGiven}
        titleStyle={{ color: "black", fontWeight: "bold" }}
              
        
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View style={styles.view}>
        <MyHeader title="See what Others Say" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          {this.state.ratingsList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List Of All Reviews</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.ratingsList}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  view:{
    flex: 1,
    backgroundColor: "#fff"
  }
});
