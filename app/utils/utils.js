function searchTime(time, myArray){
  for (let i=0; i < myArray.length; i++) {
    if (myArray[i].time.includes(time)) {
      return myArray[i];
    }
  }

  return '-';
}

function scheduleDataForTable(obj, role) {
  const { scheduleId : {
                group : { id, seriesID, year, faculty },
                teaching : {
                  class_name:
                    {type, subject: {name}},
                  professor: {firstName, lastName}
                }
          }
        } = obj;
  const { location, parity } = obj;
  let data;
  if (role === 'STUDENT') {
    data = { name,
             type: type.toLowerCase(),
             location,
             weeks: parity.toLowerCase(),
             professor: `${firstName} ${lastName}`};
  } else {
    data = { name,
             type: type.toLowerCase(),
             location,
             weeks: parity.toLowerCase(),
             faculty,
             year };
    if (type === 'COURSE') {
      data = {...data, series: seriesID};
    } else {
      data = {...data, group: id};
    }
  }

  return data;
}

const buildHourArray = (arr0, arr1, arr2, arr3, arr4, time, role) => {
  let hourArr = [];
  let subj = searchTime(time, arr0);
  if ( subj !== '-') {
    hourArr.push(scheduleDataForTable(subj, role));
  } else {
    hourArr.push(subj);
  }

  subj = searchTime(time, arr1);
  if ( subj !== '-') {
    hourArr.push(scheduleDataForTable(subj, role));
  } else {
    hourArr.push(subj);
  }

  subj = searchTime(time, arr2);
  if ( subj !== '-') {
    hourArr.push(scheduleDataForTable(subj, role));
  } else {
    hourArr.push(subj);
  }

  subj = searchTime(time, arr3);
  if ( subj !== '-') {
    hourArr.push(scheduleDataForTable(subj, role));
  } else {
    hourArr.push(subj);
  }

  subj = searchTime(time, arr4);
  if ( subj !== '-') {
    hourArr.push(scheduleDataForTable(subj, role));
  } else {
    hourArr.push(subj);
  }

  return hourArr;
};

const createProfessorSubject = (elem) => {
  const professorSubject = { subject: elem.class_name.subject.name,
    type: elem.class_name.type.charAt(0) + elem.class_name.type.slice(1).toLowerCase(),
    year: elem.class_name.subject.year,
    semester: elem.class_name.subject.semester.charAt(0) + elem.class_name.subject.semester.slice(1).toLowerCase(),
    series: elem.group.series,
    group: elem.group.id};

  if (professorSubject.type === 'Course') {
    delete professorSubject.group;
  }

  return professorSubject;
}

const createStudentSubject = (elem) => {
  return {...elem, semester: elem.semester.charAt(0) + elem.semester.slice(1).toLowerCase()};
}

export {searchTime, scheduleDataForTable, buildHourArray, createProfessorSubject, createStudentSubject};
