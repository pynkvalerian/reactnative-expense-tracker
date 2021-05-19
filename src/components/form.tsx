import React, {useState} from 'react';
import { View, StyleSheet, Keyboard, TouchableOpacity } from 'react-native';
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

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [type, setType] = useState(expense?.type || 'expenses');
  const [title, setTitle] = useState(expense?.title || '');
  const [amount, setAmount] = useState(expense?.amount || '');
  const [date, setDate] = useState(expense?.createdAt || new Date());
  const [titleError, setTitleError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  const onChangeDate = (_event: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDatePicker(false);
  };

  const reset = () => {
    setType('expenses');
    setTitle('');
    setAmount('');
    setDate(new Date());
  }

  const onPressSubmit = () => {
    if (title.length > 0 && Number(amount) !== (NaN || 0)) {
      onSave({
        id: expense?.id,
        type,
        title,
        createdAt: new Date(date).toDateString(),
        amount: Number(amount),
      });

      Keyboard.dismiss();
      reset();
      navigation.navigate('Home');

    } else {
      setTitleError(title.length < 1);
      setAmountError(Number(amount) == (NaN || 0));
    }
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
      <Item floatingLabel error={!!amountError}>
        <Label>Amount</Label>
        <Input
          autoFocus
          value={String(amount)}
          onChangeText={setAmount}
          keyboardType={"numeric"} />
      </Item>
      <Item floatingLabel error={!!titleError} >
        <Label>Title</Label>
        <Input value={title} onChangeText={setTitle} />
      </Item>
      <View style={styles.datepicker}>
        <TouchableOpacity
          onPress={() => setShowDatePicker(!showDatePicker)}>
          <View style={styles.dateContainer}>
            <Label style={styles.dateLabel}>Date</Label>
            <Text>{new Date(date).toDateString()}</Text>
          </View>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={new Date(date)}
            mode={"date"}
            is24Hour={true}
            display="spinner"
            onChange={onChangeDate}
          />
        )}
      </View>
      <Button full onPress={onPressSubmit}>
        <Text>Save</Text>
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
  },
  dateContainer: {
    marginHorizontal: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  dateLabel: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 5
  }
});
