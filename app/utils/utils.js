function searchTime(time, myArray){
  for (let i=0; i < myArray.length; i++) {
    if (myArray[i].time.includes(time)) {
      return myArray[i];
    }
  }

  return '-';
}

function scheduleDataForTable(obj) {
  const {scheduleId : { teaching : {class_name : {type, subject: { name }}, professor: {firstName, lastName}} }} = obj;
  const { location, parity } = obj;
  const data = { name,
                 type: type.toLowerCase(),
                 location,
                 weeks: parity.toLowerCase(),
                 professor: `${firstName} ${lastName}`};
  return data;
}

const buildHourArray = (arr0, arr1, arr2, arr3, arr4, time) => {
  let hourArr = [];
  let subj = searchTime(time, arr0);
  if ( subj !== '-') {
    hourArr.push(scheduleDataForTable(subj));
  } else {
    hourArr.push(subj);
  }

  subj = searchTime(time, arr1);
  if ( subj !== '-') {
    hourArr.push(scheduleDataForTable(subj));
  } else {
    hourArr.push(subj);
  }

  subj = searchTime(time, arr2);
  if ( subj !== '-') {
    hourArr.push(scheduleDataForTable(subj));
  } else {
    hourArr.push(subj);
  }

  subj = searchTime(time, arr3);
  if ( subj !== '-') {
    hourArr.push(scheduleDataForTable(subj));
  } else {
    hourArr.push(subj);
  }

  subj = searchTime(time, arr4);
  if ( subj !== '-') {
    hourArr.push(scheduleDataForTable(subj));
  } else {
    hourArr.push(subj);
  }

  return hourArr;
};

export {searchTime, scheduleDataForTable, buildHourArray};
