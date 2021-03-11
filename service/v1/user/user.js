const save = require("../../../core/user/save");
const {saveUser} = new save.SaveClass();

const saveUserService = async(body) => {
    const result = await saveUser(body);
    return result;
}

module.exports = {saveUserService};