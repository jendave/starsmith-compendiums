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

let table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.08527c8cf3635799");
let roll = await table.roll();
let environment = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.62082688c94188a7");
roll = await table.roll();
if (roll.roll.total == 100) {
    table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.ef130923fb734a55");
    roll = await table.roll();
}
let scale = roll.results[0].text;

let creatureFormTable = "";

switch (environment) {
    case "Space":
        creatureFormTable = "Compendium.foundry-ironsworn.starforgedoracles.RollTable.7971676f12fe9f85";
        break;
    case "Interior":
        creatureFormTable = "Compendium.foundry-ironsworn.starforgedoracles.RollTable.34cf9b7731ec35df";
        break;
    case "Land":
        creatureFormTable = "Compendium.foundry-ironsworn.starforgedoracles.RollTable.5dee17188d87278c";
        break;
    case "Liquid":
        creatureFormTable = "Compendium.foundry-ironsworn.starforgedoracles.RollTable.3e5b84fccec6c789";
        break;
    case "Air":
        creatureFormTable = "Compendium.foundry-ironsworn.starforgedoracles.RollTable.16fbeb54dfe52e19";
        break;
    default:
        creatureFormTable = "Compendium.foundry-ironsworn.starforgedoracles.RollTable.5dee17188d87278c";
}

table = await fromUuid(creatureFormTable);
roll = await table.roll();
let basicForm = roll.results[0].text;

const rollTablePrefix = "Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.";
const encounteredBehaviorArray = ["lKHbFR2SJbazZyMM", "LcRLOp7oBP2zOiIT", "xOro3zYQOldpg6oK"];
const firstLookArray = ["B639ZC5GB4q8pjr1", "gUUm4VyBeD9TAxBk", "K0dEKmbAL3UIV0hG"];
const creatureAspectArray = ["se7xt3pePCsteqqW", "n2OENgk435wG7mS1", "P0xAOu6mSQjDOQE0"];

table = await fromUuid(rollTablePrefix + randomArrayItem(firstLookArray));
roll = await table.roll();
let firstLook1 = roll.results[0].text;

roll = await table.roll();
let firstLook2 = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(encounteredBehaviorArray));
roll = await table.roll();
let encounteredBehavior = roll.results[0].text;

table = await fromUuid(rollTablePrefix + randomArrayItem(creatureAspectArray));
roll = await table.roll();
let creatureAspect1 = roll.results[0].text;

roll = await table.roll();
let creatureAspect2 = roll.results[0].text;

let title = "<h3><strong>Generate Creature (Starsmith)</strong></h3>";
let message = " Environment: " + environment + "<br> Scale:  " + scale + " <br> Basic Form: " + basicForm + " <br> First Look 1: " + firstLook1 + " <br> First Look 2: " + firstLook2 + " <br> Encountered Behavior:  " + encounteredBehavior + " <br> Creature Aspect 1: " + creatureAspect1 + " <br> Creature Aspect 2: " + creatureAspect2;

// Print the message
printMessage(title + message);