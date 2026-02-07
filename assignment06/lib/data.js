import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "data");


export function getData() {
    console.log(postsDirectory);
    const fileName = fs.readdirSync(postsDirectory)

    const allData = fileName.map(fileName => {
        const id = fileName.replace('.json', "");

        const fullPath = path.join(postsDirectory, fileName)

        const fileContents = fs.readFileSync(fullPath, "utf-8"); 

        const matterResult = matter(fileContents);
        console.log(matterResult);

        return {
            id,
            ...matterResult.data
        }
        
    })

    return allData.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        }
        if (a.order > b.order) {
            return -1
        }
        return 0;
    })

}