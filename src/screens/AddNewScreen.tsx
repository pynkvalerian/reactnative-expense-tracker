import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Form, Item, Input, Button, H3, Label, Text } from 'native-base';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';

const AddNewScreen = () => {
  const [type, setType] = useState('expenses');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());

  const onChangeDate = (_event: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

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
                onChangeText={setAmount}
                keyboardType={"numeric"} />
            </Item>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input onChangeText={setTitle}/>
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
            <Button full>
              <Text>Save</Text>
            </Button>
          </Form>
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
