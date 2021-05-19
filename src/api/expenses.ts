import axios from 'axios';

const getExpensesApi = () => {
  return axios.get('https://gist.githubusercontent.com/pynkvalerian/034df3357365f259adad23fc2b6be632/raw/43191a62a2be654f888f6487e6e70a23286757aa/mockExpenses.json');
};

export {
  getExpensesApi,
}
