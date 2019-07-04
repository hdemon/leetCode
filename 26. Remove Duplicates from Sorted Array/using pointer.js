/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let pointer1 = 0
  let pointer2 = 0

  while(pointer1 < nums.length) {
    while(pointer2 <= nums.length) {
      if (nums[pointer1] === nums[pointer2]) {
        pointer2 += 1
      } else {
        nums[pointer1] = nums[pointer2 - 1]
        break;
      }
    }
  }

  return nums.length
}


console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
