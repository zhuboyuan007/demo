import express from 'express';

const app = express();
app.all('*', (req, res) => res.json({ timestamp: new Date(), requestBody: { ...req.body } }));

app.listen(process.env.PORT);
