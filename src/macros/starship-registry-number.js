// Macro by el_reverend with modifications by David Hudson

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

function processInitialsResult(result) {
    if (result == "Use Faction Initials") {
        return "Faction Initials";
    }
    return result.substring(0, 3);
}

(async () => {
    let sequence = "";
    for (let i = 0; i < 4; i++) {
        let roll = new Roll("1d10-1");
        await roll.evaluate({ async: true });
        sequence = sequence.concat(roll.total);
        //roll.toMessage();
    }

    // Fetch results from the tables
    let initials = await fromUuid("Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.byBI6d46QtVH1goo");
    let initialsResult = await initials.draw({displayChat: false});

    let model = await fromUuid("Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ZlVBOz7v2GzEuXtW");
    let modelResult = await model.draw({displayChat: false});

    // Process the Initials result
    let initialsText = processInitialsResult(initialsResult.results[0]?.text || "Initials Error");
    let modelText = modelResult.results[0]?.text || "Model Error";

    // Construct the output with the h3 header
    let title = "<h3>Starship Registration Number</h3>";
    let message = `<h4>${initialsResult.results[0]?.text}</h4>${initialsText}-${sequence}-${modelText}`;

    // Display the final output
    printMessage(title + message);
})();
