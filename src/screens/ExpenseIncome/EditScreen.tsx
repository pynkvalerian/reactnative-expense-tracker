import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, H3, Text, Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem, deleteItem } from '../../redux/expenseSlice';
import _ from 'lodash';
import ExpenseForm from '../../components/form';
import { ItemType } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HomeNavigatorType } from '../../navigations/HomeNavigator';

type EditScreenNavigationProp = StackNavigationProp<
  HomeNavigatorType,
  'Edit'
>;
type EditScreenRouteProp = RouteProp<HomeNavigatorType, 'Edit'>;

type Props = {
  navigation: EditScreenNavigationProp;
  route: EditScreenRouteProp;
};

const EditScreen = ({ navigation, route }: Props) => {
  const { id } = route.params;
  const expense = useSelector(state => _.find(state.expenses.list, { id }));
  const dispatch = useDispatch();

  const onSave = (item: ItemType) => {
    dispatch(updateItem(item));
  }

  const onDelete = () => {
    dispatch(deleteItem(expense));
    navigation.navigate('Home');
  }

  return (
    <View style={styles.view}>
      <Container style={styles.container}>
        <ExpenseForm expense={expense} onSave={onSave}/>
        <Button bordered danger full onPress={onDelete}>
          <Text>Delete</Text>
        </Button>
      </Container>
    </View>
  );
}

export default EditScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: '#F3F4F6'
  },
});
