/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Chart from 'react-native-chart';

class graphicTest extends Component {
  render() {
        return (
            <View style={styles.container}>
            <Chart style={styles.chart}
                  data={data}
                  type='bar'
                  yAxisWidth={30}
                  showGrid={false}
                  axisLineWidth={3}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        width: 300,
        height: 200,
    },
});

const data = [
    ['lun', 1],
    ['mar', 3],
    ['mie', 7],
    ['jue', 9],
];

AppRegistry.registerComponent('graphicTest', () => graphicTest);
