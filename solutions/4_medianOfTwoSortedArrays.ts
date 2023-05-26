export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const [lesser, bigger] = nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2];
  const isSizeEven = (lesser.length + bigger.length) % 2 === 0;
  const halfSize = Math.floor((lesser.length + bigger.length + 1) / 2);
  let start = 0,
    end = lesser.length - 1;

  let lesserIdx: number, biggerIdx: number;
  while (true) {
    lesserIdx = Math.floor((start + end + 1) / 2);
    biggerIdx = halfSize - lesserIdx;

    const lesserLeftMax = lesserIdx === 0 ? Number.NEGATIVE_INFINITY : lesser[lesserIdx - 1];
    const lesserRightMin =
      lesserIdx === lesser.length ? Number.POSITIVE_INFINITY : lesser[lesserIdx];
    const biggerLeftMax = biggerIdx === 0 ? Number.NEGATIVE_INFINITY : bigger[biggerIdx - 1];
    const biggerRightMin =
      biggerIdx === bigger.length ? Number.POSITIVE_INFINITY : bigger[biggerIdx];

    if (lesserLeftMax <= biggerRightMin && lesserRightMin >= biggerLeftMax) {
      return isSizeEven
        ? (Math.max(lesserLeftMax, biggerLeftMax) + Math.min(lesserRightMin, biggerRightMin)) / 2
        : Math.max(lesserLeftMax, biggerLeftMax);
    }

    if (lesserLeftMax > biggerRightMin) end = lesserIdx - 1;
    else start = lesserIdx + 1;
  }
}
