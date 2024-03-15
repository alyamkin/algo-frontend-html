const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', (e) => {
    const tabIndex = [...tabs].indexOf(e.target);
    hidePanels();
    panels[tabIndex].classList.add('active');
  });
}

const hidePanels = () => {
  for (let i = 0; i < panels.length; i++) {
    console.log(panels[i]);
    panels[i].classList.remove('active');
  }
};
