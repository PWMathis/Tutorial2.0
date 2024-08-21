const paragraphs = document.querySelectorAll('p');
let currentParagraphIndex = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    currentParagraphIndex--;
  } else if (event.key === 'ArrowDown') {
    currentParagraphIndex++;
  }

  // Make sure the current paragraph index is within bounds.
  currentParagraphIndex = Math.max(0, Math.min(currentParagraphIndex, paragraphs.length - 1));

  // Focus the current paragraph.
  paragraphs[currentParagraphIndex].focus();
});