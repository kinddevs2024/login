const checkPassword = async (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    } else if (!hasUppercase) {
        return "Password must include at least one uppercase letter.";
    } else if (!hasLowercase) {
        return "Password must include at least one lowercase letter.";
    } else if (!hasNumber) {
        return "Password must include at least one number.";
    } else if (!hasSpecialChar) {
        return "Password must include at least one special character.";
    }

    return "Password is valid.";
};


module.exports = checkPassword;