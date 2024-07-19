// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

function randomArrayItem(array) {
    const index = (Math.floor(Math.random() * array.length));
    return array[index];
}

const rollTablePrefix = "Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.";
const givenNameArray = ["UnTcBB8gwFjNoT9O", "dXJhMhBt7J2FtCVh", "5acO6ocnsJerpEkI"];
const familyNameArray = ["6pv2fJdPmbl6HDGR", "v5XqY7qSbXRuBIDR", "lQR1PUQksmjUX2Fd"];
const callsignArray = ["0zs4jV8AgYw1GaVB", "iBgIwzZGGKTuCGpR", "vUTgxJRCAbApAZgi"];
const firstLookArray = ["guv5iEDeLijYuABa", "oTECxhDPRJJ3yUvh", "MsQ7rPo2gDyVIQEE"];
const initialDispositionArray = ["Lu30o0Mx9Arwipnw", "rdlIztz01R6NIJKy", "gaRwLNFfm30VzuRo"];
const characterRoleArray = ["O5x9KiSkoNAVXW6O", "VEL6LI4wBzI8eb7z", "437mrjVAePTQZGYv"];
const characterGoalArray = ["2xxntLbzYGLZ2cao", "oLDINu3MLyDgABhD", "aqapGyFUQ1Jj9uQl"];
const characterAspectArray = ["5JUVkMmXuH74WBUv", "JhY6HtE1X1xSAJW5", "cFmnWNEUaw8Lf3Qg"];

let table = await fromUuid(rollTablePrefix + randomArrayItem(givenNameArray));
let roll = await table.roll();
let givenName = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(familyNameArray));
roll = await table.roll();
let familyName = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(callsignArray));
roll = await table.roll();
let callsign = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(firstLookArray));
roll = await table.roll();
let firstLook1 = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(firstLookArray));
roll = await table.roll();
let firstLook2 = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(initialDispositionArray));
roll = await table.roll();
let initialDisposition = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(characterRoleArray));
roll = await table.roll();
let characterRole = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(characterGoalArray));
roll = await table.roll();
let characterGoal = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(characterAspectArray));
roll = await table.roll();
let characterAspect1 = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(characterAspectArray));
roll = await table.roll();
let characterAspect2 = roll.results[0].text;

let title = "<h3><strong>Generate NPC (Starsmith)</strong></h3>";
let message = " Given Name: " + givenName + "<br> Family Name:  " + familyName + " <br> Callsign: " + callsign + " <br> First Look 1: " + firstLook1 + " <br> First Look 2: " + firstLook2 + " <br> Initial Disposition:  " + initialDisposition + " <br> Character Role:  " + characterRole + " <br> Character Goal:  " + characterGoal + " <br> Revealed Character Aspect 1: " + characterAspect1 + " <br> Revealed Character Aspect 2: " + characterAspect2;

// Print the message
printMessage(title + message);