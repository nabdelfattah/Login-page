const btn = document.querySelector('.hideBtn')
const hideIcon = document.querySelector('.hideIcon')
const showIcon = document.querySelector('.showIcon')
const passwordInput = document.getElementById('password')

const hidePasswordHandler = (e) => {
  e.currentTarget.classList.toggle('selected')
  hideIcon.classList.toggle('hide')
  showIcon.classList.toggle('hide')
  if (e.currentTarget.classList.contains('selected')){
    passwordInput.type = 'text'
  } else {
    passwordInput.type = 'password'
  }
}

btn.addEventListener('click', hidePasswordHandler)