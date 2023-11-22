const fs = require('fs');
const axios = require('axios');
const process = require('process');

// fetch and save HTML given a URL
async function fetchAndSaveHTML(url, outputFile) {
    const response = await axios.get(url);
    const html = response.data;
    //save HTMl to new file
    fs.writeFile(outputFile, html, "utf-8", function(err) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log('success');
    });
    console.log(`HTML from ${url} saved to ${outputFile}`);

}

// read URLs from a file
function processURLsFromFile(inputFileName) {
    try {
        fs.readFile(inputFileName, 'utf-8', function(err, data) {
            if(err) {
                console.error(err);
                // kill the process
                process.exit(1);
            }
            const splitData = data.split('\n');
            splitData.forEach(async (d, index) => {
                const outputFile = `output_${index + 1}.html`;
                await fetchAndSaveHTML(d, outputFile);
            })
        });
    } catch (error) {
        console.error(`error reading file ${inputFileName}: ${error.message}`);
    }

}
const inputFileName = process.argv[2];
console.log(process.argv);

if (!inputFileName) {
    console.log('Please provide the input file')
} else {
    processURLsFromFile(inputFileName);
}