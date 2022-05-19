const bcrypt = require("bcrypt");
export default hashController = {
  hashPassword: password => bcrypt.hashSync(password, 10),
  validatePassword: password => bcrypt.compareSync(password, hash)
}