try {
    let progressScoreDialog = await Dialog.prompt({
        title: "Progress Score",
        content: `<p>Enter Progress Score:</p><input type="number" id="modifier" name="modifier" min="-10" max="10" value="0"/>`,
        rejectClose: true,
        callback: (html) => html.find('input').val()
    });

    let challengeDie_1 = new Roll('1d10');
    let challengeDie_2 = new Roll('1d10');
    let progressScore = parseInt(progressScoreDialog);
    await challengeDie_1.evaluate();
    await challengeDie_2.evaluate();
    challengeDie_1.toMessage();
    challengeDie_2.toMessage();

    let successes = 0;
    let match = false;

    if (progressScore > challengeDie_1.total) {
        successes += 1;
    }
    if (progressScore > challengeDie_2.total) {
        successes += 1;
    }
    if (challengeDie_1.total == challengeDie_2.total) {
        match = true;
    }

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

    //console.log("progressScore: " + progressScore.total); 
    //console.log("Modifiers: " + modifiers);
    //console.log("challengeDie_1: " + challengeDie_1.total); 
    //console.log("challengeDie_2: " + challengeDie_2.total); 
    //console.log("successes: " + successes);
    //console.log("match: " + match);
    //console.log("Result: " + result);
    let message = "<p>Progress Score: " + progressScore + "</p>" + "<h3>Result: " + result + "</h3>";
    ChatMessage.create({ content: message });
}
catch (e) {
    console.log("The Dialog was closed without a choice being made.");
}
