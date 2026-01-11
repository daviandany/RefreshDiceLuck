# 🎲 RefreshDiceLuck

> A simple dice game to test your luck and, most importantly, my JavaScript knowledge.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🔗 Live Demo
👉 <a href="https://daviandany.github.io/RefreshDiceLuck/" target="_blank"><strong>Click here to play</strong></a>

---

## 👋 About the Project

This is **RefreshDiceLuck**. The concept is simple: you refresh the page, the dice roll, and the game automatically declares the winner (Player 1 or Player 2).

I developed this project to transition from theory to **real-world application**.

My sole objective was to master **Core JavaScript Logic**—ensuring the code effectively controls the game mechanics and **manipulates the DOM with precision** to drive the user experience.

## 💡 What I Learned and Used

In this project, I focused on Web Development fundamentals:

### 1. JavaScript (Pure Logic)
I didn't use frameworks or complex functions. The code runs procedurally (line by line), which helped me understand the flow of execution.
* **Arrays:** Created a list to store the dice images.
* **Math.random():** The magic behind the game. Used it to generate random numbers and pick which die to show.
* **Conditionals (If/Else):** The most important part. The code compares the results and decides whether to display "Player 1 Wins", "Player 2 Wins", or "Draw".

```javascript
// A snippet of the logic I developed:
if (randomizingDice1 > randomizingDice2) {
    document.querySelector("whoWins").innerHTML = "🚩 Player 1 Wins!";
} else if (randomizingDice2 > randomizingDice1) {
    document.querySelector("whoWins").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("whoWins").innerHTML = "Draw!";
}
```

### 2. DOM Manipulation
I learned how to select an HTML element by ID or Class and modify it using JavaScript.
* Used `document.querySelector` to select the images.
* Used `setAttribute` to swap the dice image dynamically when the page loads.

### 3. CSS (Styling)
I used CSS to transform the HTML structure into a visually pleasant interface.
* **Flexbox:** This was the main tool for the layout, essential for aligning the dice side-by-side and centering the game on the screen.
* **Focus on Structure:** I opted for a clean and organized design. Although advanced responsiveness wasn't the main goal, the use of Flexbox ensures the game looks good on most screens.

<br>  
<div align="center"> Made with 💻 and studies by <b><a href="https://github.com/daviandany" target="_blank">@daviandany</a></b>. </div>
