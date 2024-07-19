// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

let table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.2ac8af92c0509f72");
let roll = await table.roll();
let givenName = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.f94e58504ac34af8");
roll = await table.roll();
let familyName = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.76cd6f5340a4978a");
roll = await table.roll();
let callsign = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.e422399eb54ed7b1");
roll = await table.roll();
let firstLook1 = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.e422399eb54ed7b1");
roll = await table.roll();
let firstLook2 = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.9ad07730b122052d");
roll = await table.roll();
let initialDisposition = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.fbb49cabf7e9596c");
roll = await table.roll();
let characterRole = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.a707e132902305f0");
roll = await table.roll();
let characterGoal = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.4c4b6c28ff08ad98");
roll = await table.roll();
let characterAspect1 = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.4c4b6c28ff08ad98");
roll = await table.roll();
let characterAspect2 = roll.results[0].text;

let title = "<h3><strong>Generate NPC</strong></h3>";
let message = " Given Name: " + givenName + "<br> Family Name:  " + familyName + " <br> Callsign: " + callsign + " <br> First Look 1: " + firstLook1 + " <br> First Look 2: " + firstLook2 + " <br> Initial Disposition:  " + initialDisposition + " <br> Character Role:  " + characterRole + " <br> Character Goal:  " + characterGoal + " <br> Revealed Character Aspect 1: " + characterAspect1 + " <br> Revealed Character Aspect 2: " + characterAspect2;

// Print the message
printMessage(title + message);