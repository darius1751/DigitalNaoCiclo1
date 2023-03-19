export  const validatePhone = (phone: string) => {
    const validPhone = /^3[0-2][0-1]\d{7}$/;
    return validPhone.test(phone);
}