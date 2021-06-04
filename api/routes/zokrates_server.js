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
router.get('/compile', function(req, res){
    exec('cd zk && . ./compile.sh', (error, stdout, stderr)=>{
        if(error){
            res.send(error.message);
        }else{
            res.send('Compiled');
        }
    })
});

router.get('/generateKey', function(req, res){
    exec('cd zk && . ./generate_key.sh', (error, stdout, stderr)=>{
        if(error){
            res.send(error.message);
        }else{
            res.send('Keys are Generated');
        }
    })
});

router.get('/verify/:id', function(req, res){
    var id = 31 - (9-req.params.id);
    console.log(id)
    exec('cd zk && . ./verify_pipeline.sh ' + id, (error, stdout, stderr)=>{
        res.send(stdout);
    })
});

router.get('/secret', function(req, res){
    exec('cd zk && cat secret.txt', (err, stdout, stderr) =>{
        res.send(stdout);
    })
});

module.exports = router;