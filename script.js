const progressBar = document.querySelector('.progress-bar');
const heartsContainer = document.querySelector('.hearts');
const actionButton = document.getElementById('action-button');
const modalContent = document.querySelector('.modal-content');

const createHeart = (left) => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';
  // Adjust the left position slightly to align with the progress bar
  heart.style.left = `calc(${left}% - 10px)`; // Adjust -10px as needed for better alignment
  heartsContainer.appendChild(heart);
};

const updateModalContent = () => {
  modalContent.innerHTML = `
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SARANGHAE🥰</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I'm not good with words so i will sing a song instead🫶🏻...(imagine my angelic voice singing it)..🎶Cause all of the small things that you do,are what remind me why i fell for you..and when we're apart and i'm missing you,i close my eyes and all i see is you,and the small things you do🫶🏻🫶</p>
    </div>`;
};

const toggleModal = () => {
  const modal = document.getElementById('myModal');
  if (modal.style.display === 'block' || modal.style.display === '') {
    modal.style.display = 'none';
  } else {
    updateModalContent(); // Update modal content
    modal.style.display = 'block';
  }
};

const interval = setInterval(() => {
  const computedStyle = getComputedStyle(progressBar);
  let width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
  // Increase the width by 0.1 until it reaches 100
  width = Math.min(width + 0.1, 100);
  progressBar.style.setProperty('--width', width);
  progressBar.setAttribute('data-label', width.toFixed(1) + '%');
  
  // Add hearts at intervals, e.g., every 10%
  if (width % 10 < 0.1) {
    createHeart(width);
  }

  // Check if loading is complete
  if (width >= 100) {
    clearInterval(interval);
    actionButton.style.display = 'block'; // Show the button
  }
}, 50);
