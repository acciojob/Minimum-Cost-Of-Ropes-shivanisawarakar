function minimumCostOfRopes(n, arr) {
  let cost = 0;
  const minHeap = [];

  for (let i = 0; i < n; i++) {
    minHeap.push(arr[i]);
  }

  while (minHeap.length > 1) {
    const firstMin = minHeap.shift();
    const secondMin = minHeap.shift();
    const newRope = firstMin + secondMin;
    cost += newRope;
    minHeap.push(newRope);
    minHeap.sort((a, b) => a - b);
  }

  return cost;
}

