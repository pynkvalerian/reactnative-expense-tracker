import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Card, CardItem, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

interface ItemType {
  id: string;
  title: string;
  amount: number;
  created_at: string;
  type: string;
}

const ExpenseListItem = ({item}: {item: ItemType}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Edit')}>
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
    </Pressable>
  );
}

export default ExpenseListItem;

const styles = StyleSheet.create({
  listItem: {
    justifyContent: 'space-between'
  },
});
