//your JS code here. If required.
const addButton = document.getElementById('add-button');
const clearButton = document.getElementById('clear-button');
const toastsContainer = document.getElementById('toasts');

const successRadio = document.getElementById('success');
const errorRadio = document.getElementById('error');
const messageInput = document.getElementById('message-content');
const durationInput = document.getElementById('duration');
const cancelableCheckbox = document.getElementById('cancelable');

function createToast() {
  const toastType = successRadio.checked ? 'success-toast' : 'error-toast';

  let messageText = messageInput.value.trim();
  if (!messageText) {
    messageText = successRadio.checked ? 'Success!' : 'Error.';
  }

  let duration = parseInt(durationInput.value);
  if (isNaN(duration) || duration < 500) {
    duration = 500; 
  }

  const toast = document.createElement('div');
  toast.classList.add('toast', toastType);

  const messageP = document.createElement('p');
  messageP.classList.add('message');
  messageP.textContent = messageText;
  toast.appendChild(messageP);

  if (cancelableCheckbox.checked) {
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-button');
    cancelBtn.textContent = 'X';
    cancelBtn.addEventListener('click', () => {
      toast.remove();
    });
    toast.appendChild(cancelBtn);
  }

  toastsContainer.prepend(toast);

  setTimeout(() => {
    toast.remove();
  }, duration);
}

addButton.addEventListener('click', createToast);

clearButton.addEventListener('click', () => {
  toastsContainer.innerHTML = '';
});
