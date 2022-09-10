// DOM
const emailIn = document.getElementById('email')
const passIn = document.getElementById('pass')
const btn = document.getElementById('login')
btn.addEventListener("click", testing);

// Data
class Login {
  constructor(email, pass) {
    this.email = email
    this.pass = pass
    this.result = {}
  }

  isEmpty(input) {
    return input.trim() ? true : false
  }

  login() {
    if (this.isEmpty(this.email)) this.result.email = this.email
    if (this.isEmpty(this.pass)) this.result.pass = this.pass
    return this.result
  }
}

//this is only for testing we need to creat another one
function testing() {
  let email = emailIn.value
      pass = passIn.value
      val = new Login(email, pass)
      task = val.login()
  if (task.email) console.log(val.result.email)
  if (task.pass) console.log(val.result.pass)
}