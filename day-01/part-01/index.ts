import readData from "../../helpers/readData";
import * as path from "path";

const main = (data: string) => {
    const lines = data.split("\n");

    let maxTotal = 0;
    let tempTotal = 0;

    for (const line of lines) {
        if (line === "") {
            if (tempTotal > maxTotal) {
                maxTotal = tempTotal;
            }
            tempTotal = 0;
        } else {
            tempTotal += parseInt(line);
        }
    }
    return maxTotal;
}

const data = readData(path.join(__dirname, "data.txt"));
const result = main(data);
console.log(result);