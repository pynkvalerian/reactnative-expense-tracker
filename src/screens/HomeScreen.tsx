import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Container, Card, CardItem, Text, H1, H3 } from 'native-base';
import ExpenseListItem from '../components/expenseList';
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash';
import { fetchExpenses } from '../redux/expenseSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const data = useSelector(state =>
    _.orderBy(state.expenses.list, ['createdAt'], ['desc'])
  );
  const stats = useSelector(state => state.expenses.stats);

  return (
    <View style={styles.view}>
      <Container style={styles.container}>
        <Card primary>
          <CardItem primary header style={styles.textCenter}>
            <Text>Total Balance</Text>
          </CardItem>
          <CardItem primary style={styles.textCenter}>
            <H1>RM {stats?.balance}</H1>
          </CardItem>
          <CardItem footer primary style={styles.footer}>
            <Text>Income RM{stats?.income}</Text>
            <Text>Expenses RM{stats?.expenses}</Text>
          </CardItem>
        </Card>
        <H3 style={styles.transactions}>Transactions</H3>
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
    backgroundColor: '#F3F4F6'
  },
  container: {
    padding: 20,
    backgroundColor: '#F3F4F6'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textCenter: {
    justifyContent: 'center'
  },
  transactions: {
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#1FB9BA',
    color: '#FFF'
  }
});
