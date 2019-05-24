module.exports = function main({ distance, parkTime }) {
  // write your code here...
  let result = 0;
  if (distance > 0 && distance <= 2) {
    result = 6;
  } else if (distance > 2 && distance <= 8) {
    result = 6 + (distance - 2) * 0.8;
  } else {
    result = 6 + 4.8 + (distance - 8) * 1.2;
  }
  result += parkTime * 0.25;
  return Math.round(result);
};
