// formidable  这个模块是用来处理上传文件的

var http = require('http');
var fs = require('fs');
var path = require('path');
// 时间模块
var datetime = require('silly-datetime');
// 文件上传模块
var formidable = require('formidable');

var hostname = '127.0.0.1';
var port = '3000';

var server = http.createServer(function(req, res) {
  console.log(req.url)
  // 处理请求和响应
  // 屏蔽 favicon.ico
  if (req.url == '/favicon.ico') {
    return;
  }
  if (req.url == '/formfile') {
    // ./formfile.html 就是一个简单的html页面
    // 拥有form 能提交文件即可
    fs.readFile('./formfile.html', function(err, data) {
      res.end(data);
    });
    // dopost 是form表单中的action
  } else if (req.url == '/dopost') {
    // 用formidable 来处理上传文件
    var form = new formidable.IncomingForm();

    // 设置上传文件 存放位置
    form.uploadDir = './public';

    form.parse(req, function(err, fields, files) {
      console.log(fields);
      console.log(files);

      // 改文件名
      // 时间 + 随机数 + 后缀(文件名)

      // 引入的时间模块  silly-datetime 可自行下载
      var time = datetime.format(new Date(), 'YYYYMMDDHHmmss');
      // 生产5位的随机数
      var num = parseInt(Math.random() * 100000);
      // 获取上传文件的文件名
      var extname = path.extname(files.image.name);

      // 获取旧名字
      // __dirname 代表当前项目 的根目录
      // 拼凑完整路径
      var oldname = __dirname + '/' + files.image.path;

      // 拼接新名
      var newname = __dirname + '/uploads/' + time + num + extname;
      // 执行改名
      fs.rename(oldname, newname, function(err) {
        res.writeHead(200, { 'Content-Type': 'text/html;charset = utf-8' });
        res.end('ok');
      });
    });
  } else {
    res.end('404');
  }
});

// function  可写可不写
server.listen(port, hostname, function() {
  //这里的function 可省略 ...
  console.log('我们都太假装');
});
