import * as csv from 'jquery-csv';
import * as fs from 'fs';

var testData = 'Cleaned/MASTER_forPlots.csv';

fs.readFile(testData, 'UTF-8', (err, fileContent) => {
    if (err) { console.log(err); }
    csv.toObjects(fileContent, {}, (err, data) => {
      if (err) { console.log(err); }
      for (let i = 0, len = data.length; i < len; i++) {
        console.log(data[i]);
      }
    });
  });