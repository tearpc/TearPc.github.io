// Gooey Button Script
document.addEventListener('DOMContentLoaded', () => {
  const gooeyButton = document.querySelector('.gooey-button svg');

  if (gooeyButton) {
    gooeyButton.addEventListener('click', () => {
      console.log('Gooey Button Clicked!');
      // Add custom behavior for the gooey button here
    });
  }
});
