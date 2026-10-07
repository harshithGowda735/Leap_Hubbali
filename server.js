const http = require("http");
const fs = require("fs");
const path = require("path");
const https = require("https");
const envFile = path.join(__dirname , ".env");
if(fs.existSync(envFile)){
    const envData = fs.readFileSync(envFile,"utf-8")
}