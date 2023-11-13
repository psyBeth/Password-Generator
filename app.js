function generatePassword() {
    const passwordLength = 10;
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~|}{[]:;?><,./-=';

    
    const allCharacters = lowerCaseLetters + upperCaseLetters + numbers + symbols;

    
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    
    document.getElementById('password-display').textContent = `Your Password is: ${password}`;
  }