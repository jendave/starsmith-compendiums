// Macro by el_reverend with modifications by David Hudson

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
        roll.toMessage();
    }

    // Fetch results from the tables
    let initials = await fromUuid("Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.byBI6d46QtVH1goo");
    let initialsResult = await initials.draw();

    let model = await fromUuid("Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.ZlVBOz7v2GzEuXtW");
    let modelResult = await model.draw();

    // Process the Initials result
    let initialsText = processInitialsResult(initialsResult.results[0]?.text || "Initials Error");
    let modelText = modelResult.results[0]?.text || "Model Error";

    // Construct the output with the h3 header
    let output = `<h3>Starship Registration Number</h3><h4>${initialsResult.results[0]?.text}</h4>${initialsText}-${sequence}-${modelText}`;

    // Display the final output
    ChatMessage.create({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker(),
        content: output
    });
})();
