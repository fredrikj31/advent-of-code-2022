import readData from "../../helpers/readData";
import * as path from "path";

const main = (data: string) => {
    const lines = data.split("\n");

    const totals: number[] = [];
    let tempTotal = 0;

    for (const line of lines) {
        if (line === "") {
            totals.push(tempTotal)
            tempTotal = 0;
        } else {
            tempTotal += parseInt(line);
        }
    }

    // Order the list
    totals.sort((a: number, b: number) => {
        return a - b;
    }).reverse().splice(3, totals.length - 3);

    // Calculation total result
    let result = 0;
    totals.forEach((num) => {
        result += num;
    })

    return result;
}

const data = readData(path.join(__dirname, "data.txt"));
const result = main(data);
console.log(result);