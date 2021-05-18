import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CardItem, Text } from 'native-base';

interface ItemType {
  id: string;
  title: string;
  amount: number;
  created_at: string;
  type: string;
}

const ExpenseListItem = ({item}: {item: ItemType}) => {
  return (
    <Card>
      <CardItem style={styles.listItem}>
        <View>
          <Text>{ item.title }</Text>
        </View>
        <View>
          <Text>RM { item.amount }</Text>
        </View>
      </CardItem>
    </Card>
  );
}

export default ExpenseListItem;

const styles = StyleSheet.create({
  listItem: {
    justifyContent: 'space-between'
  },
});
