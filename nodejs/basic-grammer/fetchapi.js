const fetch = require('node-fetch')

// 現在時刻をconsoleに表示
fetch('https://api.aoikujira.com/time/get.php')
  .then(response => response.text())
  .then(data => console.log(data));