const gameContent = {
    start: {
        text: "You wake up",
        choices: [
            {
                text: "Where am I?",
                nextLocation: "scene_2",
                action: () => {
                    return true;
                }
            }
        ]
    },

    scene_2: {
        text: "You're laying in a unfamiliar bed in an unfamiliar room. The scent of dust and mildew fills your nose. " +
            "A window to your left shows that it's day time, though there's no sunshine coming in. " +
            "On the right side of the room you see a closet with a door barely hanging on it's hinges. " +
            "A vanity with a large crack in the mirror sits to the right of the closet",
        choices: [
            {
                text: "Back to start",
                nextLocation: "start",
                action: () => {
                    return true;
                }
            }
        ]
    }
};