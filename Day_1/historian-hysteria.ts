// ------------ PART ONE ------------

const file = Bun.file("historian-hysteria.txt");
const text = await file.text();

const array1: number[] = [];
const array2: number[] = [];

text.split("\n").forEach((entry: string) => {
    const split = entry.split("   ");
    array1.push(Number.parseInt(split[0]));
    array2.push(Number.parseInt(split[1]));
})

array1.sort();
array2.sort();

let result1 = 0;
for (let i = 0; i < array1.length; i++) {
    let temp = array1[i] - array2[i];
    if (temp < 0) temp *= -1;
    result1 += temp;
}

console.log("distance", result1);

// ------------ PART TWO ------------

let result2 = 0;

for (let i = 0; i < array1.length; i++) {
    let temp = 0;
    array2.forEach(el => {
        if (el === array1[i]) temp++;
        if (el !== array1[i] && temp > 0) return; 
    })

    result2 += (array1[i] * temp)
}

console.log("similarity", result2);

export {};