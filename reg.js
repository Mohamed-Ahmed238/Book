// DOM
const userIn = document.getElementById('user')
const emailIn = document.getElementById('email')
const passIn = document.getElementById('pass')
const confPassIn = document.getElementById('confirm')
btn = document.getElementById('reg')
btn.addEventListener("click", testing);

// Data
class Registration {
    constructor(user,email,pass,confPass) {
      this.user = user
      this.email = email
      this.pass = pass
      this.confPass = confPass
      this.result = {}
    }
  
    isEmpty(input) {
      return input.trim() ? true : false
    }

    isIdentical() {
      return this.pass === this.confPass ? true : false
    }
  
    reg() {
      if (this.isEmpty(this.user)) this.result.user = this.user
      if (this.isEmpty(this.email)) this.result.email = this.email
      if (this.isEmpty(this.pass) && this.isEmpty(this.confPass) && this.isIdentical()) this.result.pass = this.pass
      return this.result
    }
}

//this is only for testing we need to creat another one
function testing() {
  user = userIn.value
  email = emailIn.value
  pass = passIn.value
  confPass = confPassIn.value
  
  let val = new Registration(user, email, pass, confPass)
  let task = val.reg()
  
  if (task.user) console.log(val.result.user)
  if (task.email) console.log(val.result.email)
  if (task.pass) console.log(val.result.pass)
}