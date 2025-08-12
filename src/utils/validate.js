export const validateLoginForm = ({ username, password }) => {
    let errors = {};
    if (!username.trim()) errors.username = "Username is required";
    if (!password.trim()) errors.password = "Password is required";
    return errors;
};

export const validateRegisterForm = ({ username, mobile, password, ageConfirmed }) => {
    let errors = {};
    if (!username.trim()) errors.username = "Username is required";
    if (!mobile.trim()) errors.mobile = "Mobile number is required";
    if (!password.trim()) errors.password = "Password is required";
    if (!ageConfirmed) errors.ageConfirmed = "You must confirm age 18+";
    return errors;
};

