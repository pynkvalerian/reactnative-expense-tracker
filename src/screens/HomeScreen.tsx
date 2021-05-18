import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Container, Header, Card, CardItem, Text, H1, H3 } from 'native-base';
import ExpenseListItem from '../components/expenseList';

const mockData = [
  {
    id: '1',
    title: 'Lunch',
    amount: 10,
    created_at: new Date('2021-05-01').toString(),
    type: 'expenses'
  },
  {
    id: '2',
    title: 'Dinner',
    amount: 20,
    created_at: new Date('2021-05-01').toString(),
    type: 'expenses'
  },
  {
    id: '3',
    title: 'Groceries',
    amount: 356,
    created_at: new Date('2021-05-01').toString(),
    type: 'expenses'
  }
];

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
        <H3>Transactions</H3>
        <FlatList
          data={mockData}
          renderItem={({item}) => <ExpenseListItem item={item}/>}
          keyExtractor={item => item.id}
        />
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
  },
  listItem: {
    justifyContent: 'space-between'
  },
});
