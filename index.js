const minmaxaverage = require('minmaxaverage');
const moment = require('moment');

// const average = minmaxaverage.getAverage([10, 5, 15]);
// console.log(average);

// const min = minmaxaverage.getMinNumber([10, 5, 15]);
// console.log(min);

// const max = minmaxaverage.getMaxNumber([10, 5, 15]);

// console.log(max)


setInterval(() => {
  const today = moment();
  console.log('TODAY: ', today);
  console.log('YESTERDAY: ', today);
  console.log('genial se actualiza solo: ', today);
}, 2000);