class GameEngine {
    static displayStory(location) {
        const storyOutput = document.getElementById('story-output');
        const choicesDiv = document.getElementById('choices');

        const currentScene = gameContent[location];
        storyOutput.textContent = currentScene.text;
        choicesDiv.innerHTML = "";
        currentScene.choices.forEach((choice) => {
            const button = document.createElement('button');
            button.className = "choice-btn";
            button.textContent = choice.text;
            button.addEventListener('click', () => this.makeChoice(choice));
            choicesDiv.appendChild(button);
        });
    }

    static makeChoice(choice) {
        if (choice.action()) {
            gameState.currentLocation = choice.nextLocation;
            this.displayStory(gameState.currentLocation);
        }
    }

    static addToInventory(item) {
        gameState.inventory.push(item);
        this.updateInventoryDisplay();
    }

    static updateInventoryDisplay() {
        const inventoryList = document.getElementById('inventory-list');
        inventoryList.innerHTML = '';
        gameState.inventory.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            inventoryList.appendChild(li);
        })
    }
}