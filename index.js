const merge = (arr, left, mid, rigth) => {

	let i = left;
	let j = mid + 1;
	let k = left;
	let tempArr = Array.from({length: rigth - rigth + 1}, () => undefined);

	while (i <= mid && j <= rigth) {

		if (arr[i] <= arr[j]) {
			tempArr[k] = arr[i];
			i++;
			k++;
		} else {
			tempArr[k] = arr[j];
			j++;
			k++;
		}
	}

	while (i <= mid) {
		tempArr[k] = arr[i];
		i++;
		k++;
	}
	while (j <= rigth) {
		tempArr[k] = arr[j];
		j++;
		k++;
	}

	for (let w = left; w <= rigth; w++) {
		arr[w] = tempArr[w];
	}
	
	return arr;

}

const mergeSort = (arr = [], left, rigth) => {

    if (arr.length < 2) {
        return arr;
    }

	if (left < rigth) {

		const mid = Math.floor((left + rigth) / 2);

		arr = mergeSort(arr, left, mid);

		arr = mergeSort(arr, mid + 1, rigth);

		arr = merge(arr, left, mid, rigth);
	}

	return arr;

}

const inputArr = [323, 538, 343, 12234, 328, 122, 239, 327, 129, 22, 212, 231];

console.log('Input Array: ', inputArr);

const res = mergeSort(inputArr, 0, inputArr.length - 1);

console.log('Result: ', res);