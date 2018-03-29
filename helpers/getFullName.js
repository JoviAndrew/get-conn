function getFullName(firstname, lastname, gender) {
  if (gender === 'Male') {
    return `Mr. ${firstname} ${lastname}`;
  } else if (gender === 'Female') {
    return `Ms. ${firstname} ${lastname}`;
  }
}

module.exports = getFullName;
