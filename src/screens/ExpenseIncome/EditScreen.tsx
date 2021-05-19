import React, {useState} from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { Container, Form, Item, Input, Button, H3, Label, Text } from 'native-base';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem } from '../../redux/expenseSlice';
import _ from 'lodash';

const EditScreen = ({navigation, route}) => {
  const { id } = route.params;
  const expense = useSelector(state => _.find(state.expenses.list, { id }));

  const [type, setType] = useState(expense.type);
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [date, setDate] = useState(expense.createdAt);

  console.log('expense', expense)

  const dispatch = useDispatch();

  const onChangeDate = (_event: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const reset = () => {
    setType('expenses');
    setTitle('');
    setAmount('');
    setDate(new Date());
  }

  const onSave = () => {
    // check required title + amount

    dispatch(updateItem({
      id: expense.id,
      type,
      title,
      createdAt: date,
      amount: Number(amount),
    }))

    Keyboard.dismiss();
    reset();
    navigation.navigate('Home');
  }

  return (
    <View style={styles.view}>
      <Container style={styles.container}>
          <H3>Add Expenses/Income</H3>
          <Form>
            <View style={styles.typeSelect}>
              <Button
                bordered={type !== 'expenses'}
                onPress={() => setType('expenses')}>
                <Text>Expenses</Text>
              </Button>
              <Button
                bordered={type !== 'income'}
                onPress={() => setType('income')}>
                <Text>Income</Text>
              </Button>
            </View>
            <Item floatingLabel>
              <Label>Amount</Label>
              <Input
                autoFocus
                value={String(amount)}
                onChangeText={setAmount}
                keyboardType={"numeric"} />
            </Item>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input value={title} onChangeText={setTitle} />
            </Item>
            <View style={styles.datepicker}>
              <DateTimePicker
                value={date}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={onChangeDate}
              />
            </View>
            <Button full onPress={onSave}>
              <Text>Update</Text>
            </Button>
          </Form>
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
