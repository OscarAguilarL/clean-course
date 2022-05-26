;(() => {
  // Aplicando el principio de responsabilidad única
  // Priorizar la composición frente a la herencia

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

  interface UserProps {
    email: string
    role: string
  }

  class User {
    public email: string
    public lastAccess: Date
    public role: string

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date()
      this.email = email
      this.role = role
    }

    checkCredentials() {
      return true
    }
  }

  interface SettingsProps {
    lastOpenFolder: string
    workingDirectory: string
  }

  class Settings {
    public workingDirectory: string
    public lastOpenFolder: string

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.workingDirectory = workingDirectory
      this.lastOpenFolder = lastOpenFolder
    }
  }

  interface UserSettingsProps {
    birthdate: Date
    email: string
    gender: Gender
    name: string
    lastOpenFolder: string
    role: string
    workingDirectory: string
  }

  class UserSettings {
    public person: Person
    public user: User
    public settings: Settings

    constructor({
      birthdate,
      gender,
      name,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ birthdate, gender, name })
      this.user = new User({ email, role })
      this.settings = new Settings({ lastOpenFolder, workingDirectory })
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
