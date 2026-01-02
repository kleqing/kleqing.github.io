---
published: true
name: battleship
description: a small battleship game made with typescript and c#
thumbnail: battleship.png
images: [battleship.png]
github: https://github.com/kleqing/BattleShip
date: 2025-10-18
---

A browser-based implementation of the classic Battleship game, where you play against an AI opponent.

This project is the clone of the project [Battleship](https://github.com/axeldlv/Battleship-Amazon) (repo deleted) but add some feature and using .NET as back-end

#### Features

- Classic 7x7 Battleship grid
- Custom ship size (5, 3 and 2)
- Manual ship placement with horizontal/vertical orientation
- AI opponent with smart targeting logic
- Real-time game state updates without page reloads
- Victory/defeat modal when game ends
- 
#### Game rules

- Each player has a fleet of 5 ships:
  - Carrier (5 cells)
  - BattleShip (4 cells)
  - Submarine (3 cells)
  - Cruiser (3 cells)
  - Destroyer (2 cells)

- Ships cannot overlap or be placed diagonally (only random can do that)
- Ships cannot be moved once placed
- Players take turns firing at the opponent's grid
- A hit is marked in red, a miss in blue
- A ship is sunk when all its cells are hit
- The game ends when all ships of one player are sunk
