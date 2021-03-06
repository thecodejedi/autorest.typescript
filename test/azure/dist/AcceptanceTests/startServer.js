"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const child_process = require("child_process");
var child;
before(function (done) {
    var started = false;
    var isWin = /^win/.test(process.platform);
    var nodeCmd = 'node.exe';
    if (!isWin) {
        nodeCmd = 'node';
    }
    var out = fs.openSync('./server.log', 'w');
    fs.writeSync(out, 'Test run started at ' + new Date().toISOString() + '\n');
    process.env.PORT = "3000";
    child = child_process.spawn(nodeCmd, [__dirname + '/../../../../node_modules/@microsoft.azure/autorest.testserver']);
    child.stdout.on('data', function (data) {
        fs.writeSync(out, data.toString('UTF-8'));
        if (data.toString().indexOf('started') > 0) {
            started = true;
            done();
        }
    });
    child.stderr.on('data', (data) => {
        fs.writeSync(out, data.toString('UTF-8'));
        if (!started) {
            done();
        }
    });
    child.on('close', function (code) {
        if (!started) {
            done();
        }
    });
});
after(function (done) {
    child.kill();
    done();
});
//# sourceMappingURL=startServer.js.map