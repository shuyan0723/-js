// server.js
const express = require('express');
const app = express();
const port = 3000;

// 解析JSON请求体
app.use(express.json());

// 提供一个简单的API
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// 提供一个POST接口
app.post('/api/submit', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.json({ message: 'Data received', receivedData: data });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});