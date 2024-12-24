class GameEngine {
    static displayStory(location) {
        const storyOutput = document.getElementById('story-output');
        const choicesDiv = document.getElementById('choices');

        const currentScene = gameContent[location];
        storyOutput.textContent = currentScene.text;
        choicesDiv.innerHTML = "";

        const saveLoadDiv = document.createElement('div');
        saveLoadDiv.classList.add('save-load-controls');

        const saveButton = document.createElement('button');
        saveButton.className = 'save-btn';
        saveButton.textContent = 'Save Game';
        saveButton.onclick = () => {
            gameState.saveGame();
            this.showNotification("Game saved successfully");
        };

        const loadButton = document.createElement('button');
        loadButton.className = 'load-btn';
        loadButton.textContent = 'Load Game';
        loadButton.disabled = !gameState.saveGame;
        loadButton.onclick = () => {
            if (gameState.loadGame()) {
                this.displayStory(gameState.currentLocation);
                this.updateInventoryDisplay();
                this.showNotification("Game loaded successfully");
            }
        };

        saveLoadDiv.appendChild(saveButton);
        saveLoadDiv.appendChild(loadButton);
        choicesDiv.appendChild(saveLoadDiv);

        currentScene.choices.forEach((choice) => {
            const button = document.createElement('button');
            button.className = "choice-btn";
            button.textContent = choice.text;
            button.addEventListener('click', () => this.makeChoice(choice));
            choicesDiv.appendChild(button);
        });
    }

    static showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 2000)
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