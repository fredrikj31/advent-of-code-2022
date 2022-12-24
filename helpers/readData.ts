import * as fs from "fs";

const readData = (filePath: string): string => {
    const fileContent = fs.readFileSync(filePath, {encoding: "utf-8"});
    return fileContent;
}

export default readData;