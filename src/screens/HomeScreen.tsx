import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Container, Card, CardItem, Text, H1, H3 } from 'native-base';
import ExpenseListItem from '../components/expenseList';
import { useSelector } from 'react-redux'
import { showExpensesList } from '../redux/expenseSlice';
import _ from 'lodash';

const HomeScreen = () => {
  const data = useSelector(state =>
    _.orderBy(state.expenses.list, ['createdAt'], ['desc'])
  );

  return (
    <View style={styles.view}>
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
          data={data}
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
