
const form = document.getElementById('form-img'),
  btn = document.querySelector('[name="btn"]'),
  fileUser = document.getElementById('imgin'),
  ctx = canvas.getContext('2d'),
  text = document.querySelector('[name="textarea"]'),
  containerUser = document.querySelector('.container-user'),
  boxText = document.createElement('div');
  boxText.classList.add('box-text');

function formUser(e) {
  e.preventDefault()
  text.value = '';
  fileUser.value = '';
}
form.addEventListener('submit', formUser);


btn.onclick = () => {
  const file = imgin.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
      }
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
  boxText.innerText = text.value;
  containerUser.append(boxText);
}