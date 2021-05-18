import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Card, CardItem, Text, H1 } from 'native-base';

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Header />
      <Container style={styles.container}>
        <Card>
          <CardItem header style={styles.textCenter}>
            <Text>Total Balance</Text>
          </CardItem>
          <CardItem style={styles.textCenter}>
            <H1>RM 4000</H1>
          </CardItem>
          <CardItem footer style={styles.footer}>
            <Text>Income RM5000</Text>
            <Text>Expenses RM1000</Text>
          </CardItem>
        </Card>
      </Container>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textCenter: {
    justifyContent: 'center'
  }
});
