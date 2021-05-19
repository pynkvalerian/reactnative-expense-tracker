import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Card, CardItem, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { ItemType } from '../types';

const ExpenseListItem = ({item}: {item: ItemType}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Edit', { id: item.id })}>
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
