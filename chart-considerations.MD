Considerations for Chart

1. Which library - react-native-chart-kit
2. allow users to compare expenses + income
3. date range for comparison

Some scenarios
1. user can see daily/monthly/yearly total expenses + income
2. user can filter by expense or income (future maybe can filter by categories)


Decided on react-native-chart-kit:
1. Still actively maintained.
2. Contains variety of charts that can be used for other features:
  - progress ring (for users that set goals for monthly expenses to see their progress)
  - pie chart (for categories distribution)

API endpoint would be something like:

POST /transactions
params: {
  minDate: date,
  maxDate: date,
  rangeType: daily/monthly/yearly,
  type: income/expense/both,
}

returns {
  rangeType: daily/monthly/yearly,
  labels: [date, date, date],
  data: [xx,xx,xx],
  stats: {
    max: max amount for that range,
    min: min amount for that range,
    average: average for that range.
  }
}
