const bcrypt = require("bcrypt");
export const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

export const validatePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};
