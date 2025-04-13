function getRandomUniqueNumbers(count, max) {
  const numbers = new Set();
  while (numbers.size < count) {
    const randomNum = Math.floor(Math.random() * max) + 1;
    numbers.add(randomNum);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

document.getElementById('drawButton').addEventListener('click', () => {
  const selected = getRandomUniqueNumbers(6, 45);

  Swal.fire({
    title: '행운번호 결과 🎉',
    html: `<strong>${selected.join(', ')}번</strong>`,
    icon: 'success',
    confirmButtonText: '확인',
    confirmButtonColor: '#28a745',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://media.giphy.com/media/3o6ZsYm5Yu7GzpZ4QM/giphy.gif")
      left top
      no-repeat
    `
  });
});
