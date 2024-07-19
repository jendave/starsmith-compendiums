// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

let table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.b347a87fb81a3abb");
let roll = await table.roll();
let action = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.0c5ce82c7adbb4e2");
roll = await table.roll();
let theme = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.e2bae1632870e2d2");
roll = await table.roll();
let descriptor = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.9d920a9da68abf62");
roll = await table.roll();
let focus = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.306501658d12dbad");
roll = await table.roll();
let sector_prefix = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.0b2b7f507f8901cc");
roll = await table.roll();
let sector_suffix = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.2ac8af92c0509f72");
roll = await table.roll();
let given_name = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.f94e58504ac34af8");
roll = await table.roll();
let family_name = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.fbb49cabf7e9596c");
roll = await table.roll();
let character_role = roll.results[0].text;

table = await fromUuid("Compendium.foundry-ironsworn.starforgedoracles.RollTable.a707e132902305f0");
roll = await table.roll();
let character_goal = roll.results[0].text;

let title = "<h3><strong>Sworn Quest</strong></h3>";
let message = "I swear to " + action.toLowerCase() + " a " + theme.toLowerCase() + " of a " + descriptor.toLowerCase() + " " + focus.toLowerCase() + " located in " + sector_prefix + " " + sector_suffix + ".  I am opposed by " + given_name + " " + family_name + ", a " + character_role + " who wants to " + character_goal + "."
// Print the message
printMessage(title + message);
