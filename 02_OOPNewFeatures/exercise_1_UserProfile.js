// Create a class UserProfile that encapsulates a user's profile information.

// This class should have fields for username, email, and birthdate. Use getters and setters when creating these fields.
// Use setters to validate that the username is a non-empty string, the email includes an '@' symbol,
// and the birthdate is a valid date string.

// If the username is an empty string or not a string - throw an error with the message of 'Invalid username.'

// If the email does not include a @ character - throw an error with the message of 'Invalid email.'

// If the birthdate is not a valid date string (for example '1990-01-01') -
// throw an error with the message of 'Invalid birthdate.'

// Make sure to also use the setters that you write (with the implemented validations)
// in the constructor function of the class, so it also validates the fields
// when the object is initially created from the class (i.e., when the constructor function is initially executed).

class UserProfile {
  constructor(username, email, birthdate) {
    this.setUsername(username);
    this.setEmail(email);
    this.setBirthdate(birthdate);
  }

  setUsername(newUsername) {
    if (typeof newUsername !== 'string' || !newUsername.length) {
      throw new Error("Invalid username.");
    } else {
      this._username = newUsername;
    }
  }

  setEmail(newEmail) {
    if (typeof newEmail !== 'string' || !newEmail.includes('@')) {
      throw new Error(`Invalid email.`);
    } else {
      this._email = newEmail;
    }
  }

  setBirthdate(newBirthdate) {
    if (typeof newBirthdate !== 'string' || isNaN(Date.parse(newBirthdate))) {
      throw new Error(`Invalid birthdate.`);
    } else {
      this._birthdate = newBirthdate;
    }
  }

  get username() {
    return this._username;
  }

  set username(newUsername) {
    this.setUsername(newUsername);
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this.setEmail(newEmail);
  }

  get birthdate() {
    return this._birthdate;
  }

  set birthdate(newBirthdate) {
    this.setBirthdate(newBirthdate);
  }
}
