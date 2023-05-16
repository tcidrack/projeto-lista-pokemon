const buttonChangeTheme = document.getElementById("change-theme-button");
const body = document.querySelector("body");
const themeChangeButtonImage = document.querySelector(".button-img");

buttonChangeTheme.addEventListener("click", () => {

    const activeDarkMode = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode");

    if (activeDarkMode) {

        themeChangeButtonImage.setAttribute("src", "src/img/sun.png");

    } else {

        themeChangeButtonImage.setAttribute("src", "src/img/moon.png");
    }
});
