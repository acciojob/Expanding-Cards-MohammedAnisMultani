//your JS code here. If required.
function expandCard(panelIndex) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel, index) => {
      if (index + 1 === panelIndex) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }