// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message, };
    ChatMessage.create(chatData, {})
}

function randomArrayItem(array) {
    const index = (Math.floor(Math.random() * array.length));
    return array[index];
}

const rollTablePrefix = "Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.";
const actionArray = ["OSpHuphKhIOcJy6e", "EdMDbQ2rvj1kjsVw", "P2eGB9bEuZtwAQxq"];
const themeArray = ["mgGRUu62QCdo0n2Z", "cCXTQZgR8f8d0Ojq", "2KgRpUejv7U6Pjzf"];
const descriptorArray = ["886Dxrj4VbhJWWH8", "8SO1JnHLK1F7sFwQ", "02ya1SPztxDlHmV0"];
const focusArray = ["zQO6QiD9dBseAj2n", "vLrIoBVbDBjNziuq", "s58V9HjgGqP3tmT2"];
const sectorPrefixArray = ["OBgw20hZhAlacN3n", "1qgTxhg1qpPATkiu", "vk6vBQsstREMx9AV"];
const sectorSuffixArray = ["KOB1e7oQ9qA5lZIB", "KGTJ4kSSkeyHxgZy", "MQFMTMilYVltbR0q"];
const givenNameArray = ["UnTcBB8gwFjNoT9O", "dXJhMhBt7J2FtCVh", "5acO6ocnsJerpEkI"];
const familyNameArray = ["6pv2fJdPmbl6HDGR", "v5XqY7qSbXRuBIDR", "lQR1PUQksmjUX2Fd"];
const characterRoleArray = ["O5x9KiSkoNAVXW6O", "VEL6LI4wBzI8eb7z", "437mrjVAePTQZGYv"];
const characterGoalArray = ["2xxntLbzYGLZ2cao", "oLDINu3MLyDgABhD", "aqapGyFUQ1Jj9uQl"];


let table = await fromUuid(rollTablePrefix + randomArrayItem(actionArray));
let roll = await table.roll();
let action = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(themeArray));
roll = await table.roll();
let theme = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(descriptorArray));
roll = await table.roll();
let descriptor = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(focusArray));
roll = await table.roll();
let focus = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(sectorPrefixArray));
roll = await table.roll();
let sectorPrefix = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(sectorSuffixArray));
roll = await table.roll();
let sectorSuffix = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(givenNameArray));
roll = await table.roll();
let givenName = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(familyNameArray));
roll = await table.roll();
let familyName = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(characterRoleArray));
roll = await table.roll();
let characterRole = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(characterGoalArray));
roll = await table.roll();
let characterGoal = roll.results[0].text;

let title = "<h3><strong>Sworn Quest (Starsmith)</strong></h3>";
let message = "I swear to " + action.toLowerCase() + " a " + theme.toLowerCase() + " of a " + descriptor.toLowerCase() + " " + focus.toLowerCase() + " located in " + sectorPrefix + " " + sectorSuffix + ".  I am opposed by " + givenName + " " + familyName + ", a " + characterRole + " who wants to " + characterGoal + "."
// Print the message
printMessage(title + message);
