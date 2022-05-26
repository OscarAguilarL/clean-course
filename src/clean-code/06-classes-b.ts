;(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = 'M' | 'F'

  interface PersonProps {
    name: string
    gender: Gender
    birthdate: Date
  }

  class Person {
    public name: string
    public gender: Gender
    public birthdate: Date

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name
      this.gender = gender
      this.birthdate = birthdate
    }
  }

  interface UserProps extends Person {
    email: string
    role: string
  }

  class User extends Person {
    public lastAccess: Date
    public email: string
    public role: string

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate })
      this.lastAccess = new Date()
      this.email = email
      this.role = role
    }

    checkCredentials() {
      return true
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string
    lastOpenFolder: string
  }

  class UserSettings extends User {
    public workingDirectory: string
    public lastOpenFolder: string

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      name,
      role,
      gender,
      birthdate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate })
      this.workingDirectory = workingDirectory
      this.lastOpenFolder = lastOpenFolder
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/home',
    email: 'mail@mail.com',
    name: 'Oscar',
    role: 'Admin',
    gender: 'M',
    birthdate: new Date('1999-08-24'),
  })

  console.log({ userSettings })
})()
