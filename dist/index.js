/* eslint-disable no-void */
Object.defineProperty(exports, '__esModule', { value: true });
exports.formatPhoneNumber = void 0;
// challenge 0
const data = require('../data/data.json');
// challenge 1
// capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// challenge 2
// format the purchased date as "Month date, Year"
function formatDate(dateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}
// challenge 3
// calculate and format "Last Payment"
function formatLastPayment(lastPaymentDate) {
  const lastPayment = new Date(lastPaymentDate);
  const currentDate = new Date();
  const monthDifference = (currentDate.getFullYear() - lastPayment.getFullYear()) * 12
        + currentDate.getMonth()
        - lastPayment.getMonth();
  if (monthDifference === 0) {
    return 'less than a month ago';
  }
  if (monthDifference === 1) {
    return '1 month ago';
  }

  return `${monthDifference} months ago`;
}
// challenge 4
// format the phone number as "(xxx) xxx-xxxx"
function formatPhoneNumber(phone) {
  if (phone.length !== 10 || isNaN(Number(phone))) {
    throw new Error('Invalid phone number format. It must be 10 digits.');
  }
  const areaCode = phone.slice(0, 3);
  const centralOfficeCode = phone.slice(3, 6);
  const stationCode = phone.slice(6, 10);
  return `(${areaCode}) ${centralOfficeCode}-${stationCode}`;
}
exports.formatPhoneNumber = formatPhoneNumber;
// iterate through users and print the formatted information
data.forEach((user) => {
  const capitalizedFirstName = capitalizeFirstLetter(user.first_name);
  const capitalizedLastName = capitalizeFirstLetter(user.last_name);
  const formattedPurchaseDate = formatDate(user.purchased);
  const formattedLastPayment = formatLastPayment(user.lastpayment);
  const formattedPhoneNumber = formatPhoneNumber(user.phone);
  console.log(`${capitalizedFirstName} ${capitalizedLastName}`);
  console.log(`${user.make} ${user.model}`);
  console.log(`Purchased: ${formattedPurchaseDate}`);
  console.log(`Last Payment: ${formattedLastPayment}`);
  console.log(`Phone: ${formattedPhoneNumber}`);
  console.log(`City: ${user.city}\n`);
});
