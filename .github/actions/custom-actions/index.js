//custom .net workflow action
const core = require('@actions/core');
const github = require('@actions/github');

function run() {
    try {
        const nameToGreet = core.getInput('who-to-greet');
        console.log(`Hello ${nameToGreet}!`);
        const time = (new Date()).toTimeString();
        core.setOutput("time", time);
        console.log(`The current time is ${time}`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();