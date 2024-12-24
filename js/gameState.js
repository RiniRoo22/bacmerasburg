const gameState = {
    currentLocation: 'start',
    inventory: [],
    flags: {}, // for tracking story progression

    saveGame() {
        const saveData = {
            currentLocation: this.currentLocation,
            inventory: this.inventory,
            flags: this.flags
        };
        localStorage.setItem("savedGame", JSON.stringify(saveData));
    },
    loadGame() {
        const savedData = localStorage.getItem("savedGame");
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            this.currentLocation = parsedData.currentLocation;
            this.inventory = parsedData.inventory;
            this.flags = parsedData.flags;
            return true;
        }
        return false;
    },

    hasSavedGame() {
        return localStorage.getItem("savedGame") !== null;
    }
};