const fs = require('fs');
const path = require('path');

const countFilePath = path.join(__dirname, '..', 'count.json');


function getCount() {
    if (fs.existsSync(countFilePath)) {
        const fileContent = fs.readFileSync(countFilePath);
        return JSON.parse(fileContent).count;
    } else {
        return 0; // Start from 0 if the file does not exist
    }
}


function updateCount(newCount) {
    fs.writeFileSync(countFilePath, JSON.stringify({ count: newCount }));
}


export default (req, res) => {
    if (req.method === 'GET') {
        let count = getCount();  
        count += 1;  
        updateCount(count);  

        res.status(200).json({ count });
    } else {
        res.status(404).send('Not Found');
    }
};
