const gameContent = {
    start: {
        text: "You wake up",
        choices: [
            {
                text: "Where am I?",
                nextLocation: "scene_2",
                action: () => { return true; }
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
                text: "Stay in bed",
                nextLocation: "scene_4",
                action: () => { return true; }
            },
            {
                text: "Get up",
                nextLocation: "scene_3",
                action: () => { return true; }
            }
        ]
    },
    scene_3: {
        text: "As you pull yourself out of bed your muscles scream in agony. " +
            "Your bones feel like they're moments away from shattering into splinters. " +
            "Your head pulsates in a way that makes the whole room shake.",
        choices: [
            {
                text: "Steady yourself.",
                nextLocation: "scene_5_C",
                action: () => { return true; }
            },
            {
                text: "Lay back down.",
                nextLocation: "scene_5_D",
                action: () => { return true; }
            }

        ]
    },
    scene_4: {
        text: "You take slow, steady breaths. Your keep your eyes shut tight as you try to ground yourself. " +
            "Your fingers grip onto the blanket and you note the rough texture of the fabric.",
        choices: [
            {
                text: "Get up.",
                nextLocation: "scene_5_B",
                action: () => { return true; }
            },
            {
                text: "Stay in bed.",
                nextLocation: "scene_5_A",
                action: () => { return true; }
            }
        ]
    },
    scene_5_A: {
        text: "Your eyes slowly open once more to look around the room. " +
            "You don't know where you are, but you don't know where you're supposed to be either. " +
            "You can't think of what your actual room looks like, but you know it's not this. " +
            "You know your bed isn't the one underneath you that creaks with every breath you take. " +
            "You're positive you would never use a blanket as scratchy as the one on top of you.",
        choices: [
            {
                text: "Get up.",
                nextLocation: "scene_5_B",
                action: () => { return true; }
            },
            {
                text: "Stay in bed.",
                nextLocation: "scene_5_E",
                action: () => { return true; }
            }
        ]
    },
    scene_5_B: {
        text: "You slowly pull yourself out of the bed. Your joints grind against one another as " +
            "you swing your feet over the edge and let them rest on the cold wood floor. You carefully " +
            "rise to your feet and despite a now dull head ache thumping behind your eyes - you feel steady.",
        choices: [
            {
                text: "Go to the window",
                nextLocation: scene_5_F,
                action: () => { return true; }
            },
            {
                text: "Go to the door",
                nextLocation: null,
                action: () => { return false; }
            },
            {
                text: "Go to the closet",
                nextLocation: null,
                action: () => { return false; }
            },
            {
                text: "Go to the vanity",
                nextLocation: null,
                action: () => { return false; }
            }
        ]
    },
    scene_5_C: {
        text: "You take deep breaths to try to steady your shaking legs. " +
            "You almost fall back onto the bed, but after a few grueling moments " +
            "you manage to pull yourself together. The pain subsides for now.",
        choices: [
            {
                text: "Go to the window",
                nextLocation: null, // TODO
                action: () => { return false; }
            },
            {
                text: "Go to the door",
                nextLocation: null,
                action: () => { return false; }
            },
            {
                text: "Go to the closet",
                nextLocation: null,
                action: () => { return false; }
            },
            {
                text: "Go to the vanity",
                nextLocation: null,
                action: () => { return false; }
            }
        ]
    },
    scene_5_D: {
        text: "It's too much to bare. You collapse back onto the bed, causing a symphony of creaks, and " +
            "press the heels of your palms into your eyes to try to force the migraine away." +
            "You hear floorboards creaking in the distance elsewhere in the house",
        choices: [
            {
                text: "Steady yourself",
                nextLocation: null,
                action: () => { return false; }
            },
            {
                text: "Stay in bed",
                nextLocation: null,
                action: () => { return false; }
            }
        ]
    },
    scene_5_E: {
text: "Your eyes slowly drift close again. You woke up exhausted and you can't help but want to rest for a little while longer."+
 "Despite the springs from the mattress practically digging into your body or the blanket on top of you making you want to itch your skin raw, you stay in bed."+

"You hear floorboards creaking in the distance elsewhere in the house.",
        choices:[
            {
                text: "",
                    nextLocation: null,
                action: () => [ return false; }
            
},
  scene_5_F: {
text: "You drag your aching body over to the window and peer outside."+
    "The sky is blanketed by thick gray clouds, hiding any sunlight that might dare try to shine through."+
 "You see other houses across the street - even see a man taking his garbage out to the curb. You feel safer knowing that people are nearby."+ 
"You take note that the front yard in front of the house you are currently in is over grown. There's a mail box that appears to have been smashed to bits laying on the curb.",
        choices:[
            {
                text: "",
                    nextLocation: null,
                action: () => [ return false; }
            
    
