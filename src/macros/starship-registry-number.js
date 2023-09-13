function processInitialsResult(result) {
    if (result == "Use Faction Initials") {
        return "Faction Initials";
    }
    return result.substring(0, 3);
}

(async () => {
    let roll = new Roll("1d10000-1");
    await roll.evaluate({ async: true });
    let sequence = roll.terms[0].results[0]?.result.toString().padStart(4, "0");

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
