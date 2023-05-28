function sum(...nums: number[]) {
  return nums.reduce((sum, current) => sum + current, 0);
}

function nextUnique(ptr: number, direction: 1 | -1, nums: number[]) {
  if ((direction === 1 && ptr === 0) || (direction === -1 && ptr === nums.length - 1)) return ptr;
  while (nums[ptr - direction] === nums[ptr]) ptr += direction;
  return ptr;
}

export default function threeSum(nums: number[]): number[][] {
  const triplets = [];
  nums = nums.sort((prev, current) => prev - current);

  for (let anchor = 0; anchor < nums.length - 2; anchor++) {
    anchor = nextUnique(anchor, 1, nums);

    let left = anchor + 1,
      right = nums.length - 1;
    while (left < right) {
      const triplet = [nums[anchor], nums[left], nums[right]];
      const tripletSum = sum(...triplet);
      if (tripletSum === 0) {
        triplets.push(triplet);
        left = nextUnique(left + 1, 1, nums);
      }
      if (tripletSum < 0) left = nextUnique(left + 1, 1, nums);
      if (tripletSum > 0) right = nextUnique(right - 1, -1, nums);
    }
  }

  return triplets;
}
