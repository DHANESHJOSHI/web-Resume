const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5030;

const countFilePath = 'count.json';


function getCount() {
    if (fs.existsSync(countFilePath)) {
        const fileContent = fs.readFileSync(countFilePath);
        return JSON.parse(fileContent).count;
    } else {
        return 0; 
    }
}


function updateCount(newCount) {
    fs.writeFileSync(countFilePath, JSON.stringify({ count: newCount }));
}


app.get('/api/usercount', (req, res) => {
    let count = getCount();
    count += 1; 
    updateCount(count); 
    res.json({ count }); 
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
