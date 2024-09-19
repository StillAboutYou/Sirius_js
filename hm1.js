class User {
  constructor(name, email, role = 'user') {
      this.name = name
      this.email = email
      this.role = role
  }

  login() {
      console.log(`Пользователь ${this.name} вошел в систему.`)
  }

  logout() {
      console.log(`Пользователь ${this.name} вышел из системы.`)
  }
}

class Admin extends User {
  constructor(name, email, role = 'admin') {
      super(name, email, role)
  }

  deleteUser(user) {
      console.log(`Пользователь ${user.name} был удален администратором ${this.name}.`)
  }
}

var user1 = new User('Ivan', '@mail')
user1.login()
user1.logout()
var user2 = new User('Anton', '@gmail', 'admin')
user2.login()
var admin1 = new Admin('Administrator', '@admin')
admin1.login()
admin1.deleteUser(user2)