export const darkModeHandle = () => {
  const darkModeSwitcher = document.getElementById("toggleDarkMode");
  const htmlElement = document.documentElement; //при входе на страницу, проверяет, есть ли в localStorage сохраненный режим темной темы
  if (localStorage.getItem("mode") === "dark") {
    // если да, устанавливает темную тему
    htmlElement.classList.add("dark");
    darkModeSwitcher.checked = true;
  }
  // при нажатии на свитчер, меняется тема и сохраняется значение соответствующего режима в localStorage
  darkModeSwitcher.addEventListener("input", () => {
    htmlElement.classList.toggle("dark");

    if (htmlElement.classList.contains("dark")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
  });
};
