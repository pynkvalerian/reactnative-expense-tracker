import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, H3 } from 'native-base';
import { addItem } from '../../redux/expenseSlice';
import ExpenseForm from '../../components/form';
import { ItemType } from '../../types';
import { useAppDispatch } from '../../redux/hooks';

const AddNewScreen = () => {
  const dispatch = useAppDispatch();

  const onSave = (item: ItemType) => {
    dispatch(addItem(item));
  }

  return (
    <View style={styles.view}>
      <Container style={styles.container}>
          <H3>Add Expenses/Income</H3>
          <ExpenseForm onSave={onSave}/>
      </Container>
    </View>
  );
}

export default AddNewScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: '#F3F4F6'
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
