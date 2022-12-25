import readData from "../../helpers/readData";
import * as path from "path";

const choicesWithPoints: {[key: string]: number} = {
    "A": 1,
    "B": 2,
    "C": 3,
    "X": 1,
    "Y": 2,
    "Z": 3
}

const main = (data: string) => {
    let totalPoints: number = 0;

    const lines = data.split("\n");
    for (const round of lines) {
        const choices = round.split(" ");
        const opponentChoice: string = choices[0];
        const opponentPoints: number = choicesWithPoints[opponentChoice];
        const ourChoice: string = choices[1];
        const ourPoints: number = choicesWithPoints[ourChoice];

        // Check for draw
        if (opponentPoints === ourPoints) {
            totalPoints += (ourPoints + 3);
            continue;
        }

        // Cases we win
        if (opponentChoice === "A" && ourChoice === "Y") {
            totalPoints += (ourPoints + 6)
            continue;
        } else if (opponentChoice === "B" && ourChoice === "Z") {
            totalPoints += (ourPoints + 6)
            continue;
        } else if (opponentChoice === "C" && ourChoice === "X") {
            totalPoints += (ourPoints + 6)
            continue;
        } else {
            totalPoints += ourPoints;
            continue;
        }
    }

    return totalPoints;
}

const fileContent = readData(path.join(__dirname, "data.txt"));
const result = main(fileContent);
console.log(result);