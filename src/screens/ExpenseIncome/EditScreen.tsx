import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, H3 } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem } from '../../redux/expenseSlice';
import _ from 'lodash';
import ExpenseForm from '../../components/form';
import { ItemType } from '../../types';

const EditScreen = ({ route }) => {
  const { id } = route.params;
  const expense = useSelector(state => _.find(state.expenses.list, { id }));
  const dispatch = useDispatch();

  const onSave = (item: ItemType) => {
    dispatch(updateItem(item));
  }

  return (
    <View style={styles.view}>
      <Container style={styles.container}>
          <H3>Edit {expense.title}</H3>
          <ExpenseForm expense={expense} onSave={onSave}/>
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
  },
  typeSelect: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: "space-evenly"
  },
  datepicker: {
    marginVertical: 20,
    marginHorizontal: 'auto',
    justifyContent: 'center',
  }
});
