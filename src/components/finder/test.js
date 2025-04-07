import fs from 'fs';
import { createReadStream } from "fs";
import { parse } from "csv-parse";
const answer = [];

createReadStream("./us_hospital_locations.csv")
    .pipe(parse({delimiter: ",", from_line: 2}))
    .on("data", function (row) {
        answer.push(row[18])
    })
    .on("end", function (){
        console.log(answer.length)
    })
    .on("error", function (error){
        console.log(error.message);
    })