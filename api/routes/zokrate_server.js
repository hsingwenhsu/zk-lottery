var express = require('express');
var router = express.Router();
const {spawn} = require('child_process');
const {exec} = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

router.get('/', function(req, res, next) {
    exec('ls', (error, stdout, stderr)=>{
        if(error) {
            console.log(`error: ${error.message}`)
            return
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`)
            return
        }
        res.send(`${stdout}`)
    })
});

router.get('/secret/', function(req, res){
    exec('cat secret.txt', (error, stdout, stderr)=>{
        res.send(stdout);
    })
});

router.get('/secret/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    res.send(id);
});

module.exports = router;