module.exports = function main(inputs) {
  // write your code here...
  let result = 0;
  if (inputs.distance > 0 && inputs.distance <= 2) {
    result = 6;
  } else if (inputs.distance > 2 && inputs.distance <= 8) {
    result = 6 + (inputs.distance - 2) * 0.8;
  } else {
    result = 6 + 4.8 + (inputs.distance - 8) * 1.2;
  }
  result += inputs.parkTime * 0.25;
  return Math.round(result);
};
