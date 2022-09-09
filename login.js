class Login {
  constructor(username, password) {
    this.user = username
    this.pass = password
    this.result = {}
  }

  isEmpty(input) {
    return input.trim() ? true : false
  }

  login() {
    if (this.isEmpty(this.user)) this.result.username = this.user
    if (this.isEmpty(this.pass)) this.result.password = this.pass
    return this.result
  }
}

//testing the code

let val = new Login('adfdsf', 'fdsfds')
let result = val.login()

if (result.username) console.log(result.username)
if (result.password) console.log(result.password)
