const form = document.querySelector('form[name="contact"]');
const successMessage = form.querySelector('.form-message.success');
const errorMessage = form.querySelector('.form-message.error');

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });
    if (response.ok) {
      successMessage.classList.remove('visually-hidden');
      errorMessage.classList.add('visually-hidden');
      form.reset();
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (err) {
    errorMessage.classList.remove('visually-hidden');
    successMessage.classList.add('visually-hidden');
  }
});
