const SHA256 = require('crypto-js/sha256')
const validatePassword = (test, actual) => {
    if (test === actual) return true
    return false
}

module.exports = validatePassword
