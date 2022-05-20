const bcrypt = require("bcrypt");
export const hashController = {
  hashPassword: password => bcrypt.hashSync(password, 10),
  validatePassword: (password, hash) => bcrypt.compareSync(password, hash)
}