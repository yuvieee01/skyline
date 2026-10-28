    const skyline = document.querySelector(".skyline");
    const modeButton = document.getElementById("modeButton");
    const windows = document.querySelectorAll(".window");

    modeButton.addEventListener("click", function () {
      const isNight = skyline.classList.toggle("night");

      if (isNight) {
        modeButton.textContent = "Day Mode";

        // Visit each window and randomly decide whether its light is on.
        windows.forEach(function (windowElement) {
          const lightOn = Math.floor(Math.random() * 2); // Produces either 0 or 1.

          if (lightOn === 1) {
            windowElement.style.backgroundColor = "yellow";
          } else {
            windowElement.style.backgroundColor = "gray";
          }
        });
      } else {
        modeButton.textContent = "Night Mode";

        // In daytime, reset every window to gray.
        windows.forEach(function (windowElement) {
          windowElement.style.backgroundColor = "gray";
        });
      }
    });
