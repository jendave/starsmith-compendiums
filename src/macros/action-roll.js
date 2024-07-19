// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message };
    ChatMessage.applyRollMode(chatData, game.settings.get("core", "rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let modifiers = await Dialog.prompt({
        title: "Action Roll",
        content: `<p>Enter Action Roll modifier:</p><input type="number" id="modifier" name="modifier" min="-10" max="10" value="0"/>`,
        callback: (html) => html.find('input').val()
    })

    let actionDie = new Roll('1d6');
    let challengeDie_1 = new Roll('1d10');
    let challengeDie_2 = new Roll('1d10');
    await actionDie.evaluate();
    await challengeDie_1.evaluate();
    await challengeDie_2.evaluate();
    actionDie.toMessage();
    challengeDie_1.toMessage();
    challengeDie_2.toMessage();

    let successes = 0;
    let match = false;
    let actionRoll = actionDie.total + parseInt(modifiers);

    if (actionRoll > challengeDie_1.total) {
        successes += 1;
    }
    if (actionRoll > challengeDie_2.total) {
        successes += 1;
    }
    if (challengeDie_1.total == challengeDie_2.total) {
        match = true;
    }

    //console.log("actionDie: " + actionDie.total); 
    //console.log("Modifiers: " + modifiers);
    //console.log("actionRoll: " + actionRoll); 
    //console.log("challengeDie_1: " + challengeDie_1.total); 
    //console.log("challengeDie_2: " + challengeDie_2.total); 
    //console.log("successes: " + successes);
    //console.log("match: " + match);

    let result = "Miss";
    switch (successes) {
        case 0:
            result = "Miss";
            if (match) {
                result += " with a Match"
            }
            break;
        case 1:
            result = "Weak Hit";
            break;
        case 2:
            result = "Strong Hit";
            if (match) {
                result += " with a Match"
            }
    }

    //console.log("Result: " + result);
    // let message = "<h3>Action Roll</h3><p>Modifiers: " + modifiers + "</p>" + "<h3>Result: " + result + "</h3>";
    // ChatMessage.create({ content: message });

    // Construct the output with the h3 header
    let title = "<h3>Action Roll</h3";
    let message = "<p>Modifiers: " + modifiers + "</p>" + "<h3>Result: " + result + "</h3>";

    // Display the final output
    printMessage(title + message);
}
catch (e) {
    console.log("The Dialog was closed without a choice being made.");
}
