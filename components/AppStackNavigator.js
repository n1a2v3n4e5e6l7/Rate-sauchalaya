import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ReadReview from '../screens/ReadReview';

export const AppStackNavigator = createStackNavigator({
  ReviewList : {
    screen : ReadReview,
    navigationOptions:{
      headerShown : false
    }
  }
 },
  {
    initialRouteName: 'ReviewList'
  }
);
