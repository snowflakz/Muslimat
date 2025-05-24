document.addEventListener('DOMContentLoaded', () => {
  const toggleTextBtn = document.getElementById('textToggleBtn');
  const toggleInfoBtn = document.getElementById('toggleInfoBtn');
  const additionalInfo = document.getElementById('additionalInfo');

  toggleTextBtn.addEventListener('click', () => {
    toggleTextBtn.textContent = toggleTextBtn.textContent === "Click Me"
      ? "Thanks for Clicking!"
      : "Click Me";
  });

  toggleInfoBtn.addEventListener('click', () => {
    additionalInfo.classList.toggle('hidden');
    toggleInfoBtn.textContent = additionalInfo.classList.contains('hidden')
      ? "Show More"
      : "Hide Info";
  });
});
