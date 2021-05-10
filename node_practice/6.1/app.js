const express = require('express');
const path = require('path');

const app = express();

// 서버에 port라는 속성을 3000으로 지정한다
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
  res.send('hello express');
});

app.get('/about', (req, res) => {
  res.send('hello express');
});

app.listen(app.get('port'), () => {
  console.log('익스프레스 서버 실행');
});
