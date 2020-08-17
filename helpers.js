function mean(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += parseInt(nums[i]);
  }
  return (total / nums.length).toFixed(2);
}

function median(nums) {
  let median = 0;
  nums.sort();
  if (nums.length % 2 === 0) {
    median = (parseInt(nums[nums.length / 2 - 1]) + parseInt(nums[nums.length / 2])) / 2;
  } else {
    median = nums[(nums.length - 1) / 2];
  }
  return median;
}

function mode(nums) {
  let modes = [], count = [], maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    count[num] = (count[num] || 0) + 1;
    if (count[num] > maxIndex) {
      maxIndex = count[num];
    }
  }

  for (c in count) {
    if (count.hasOwnProperty(c)) {
      if (count[c] === maxIndex) {
        modes.push(Number(c));
      }
    }
  }
  return modes;
}

function validateQueryParams(params) {
  for (const element of params) {
    if (!parseInt(element)) {
      return false;
    }
  }
  return true;
}

module.exports = {
  mean: mean,
  median: median,
  mode: mode,
  validateQueryParams: validateQueryParams
}