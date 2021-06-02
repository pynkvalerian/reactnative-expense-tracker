import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Container, H3 } from 'native-base';
import { View } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const ProfileScreen = () => {
  return (
    <View style={styles.view}>
      <Container style={styles.container}>
        <H3 style={styles.title}>Monthly Transactions</H3>
        <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [1000, 800, 1200, 500, 700, 1000]
            }
          ]
        }}
        width={Dimensions.get("window").width - 50}
        height={220}
        yAxisLabel="RM"
        chartConfig={{
          backgroundColor: "#FFF",
          backgroundGradientFrom: "#FFF",
          backgroundGradientTo: "#FFF",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgb(31, 185, 186, ${opacity})`,
          labelColor: (opacity = 1) => `rgb(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#FFF"
          }
        }}
        bezier
        fromZero
        style={{
          marginVertical: 8,
          borderRadius: 10
        }}
      />
      </Container>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#F3F4F6'
  },
  container: {
    padding: 20,
    backgroundColor: '#F3F4F6'
  },
  title: {
    padding: 20,
  },
});
