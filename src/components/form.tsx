import React, {useState} from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { Form, Item, Input, Button, Label, Text } from 'native-base';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import _ from 'lodash';
import { ItemType } from '../types';
import { useNavigation } from '@react-navigation/native';

interface ExpenseFormProps {
  expense?: ItemType;
  onSave: (item: ItemType) => void;
}

const ExpenseForm = ({expense, onSave}: ExpenseFormProps) => {
  const navigation = useNavigation();

  const [type, setType] = useState(expense?.type || 'expenses');
  const [title, setTitle] = useState(expense?.title || '');
  const [amount, setAmount] = useState(String(expense?.amount) || '');
  const [date, setDate] = useState(expense?.createdAt || new Date());

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

  const onPressSubmit = () => {
    // check required title + amount

    onSave({
      id: expense?.id,
      type,
      title,
      createdAt: date,
      amount: Number(amount),
    });

    Keyboard.dismiss();
    reset();
    navigation.navigate('Home');
  }

  return (
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
      <Button full onPress={onPressSubmit}>
        <Text>Update</Text>
      </Button>
    </Form>
  );
}

export default ExpenseForm;

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
