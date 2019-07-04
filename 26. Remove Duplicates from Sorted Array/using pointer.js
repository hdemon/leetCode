/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const l = nums.length
  let pointer1 = 0
  let pointer2 = 0

  while(pointer2 >= l) {
    if (nums[pointer1] === nums[pointer2]) {
      pointer2 += 1
    } else {
      break;
    }
  }
}
