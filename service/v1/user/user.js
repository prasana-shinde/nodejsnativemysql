const save = require("../../../core/user/save");
const read = require("../../../core/user/read");
const update = require("../../../core/user/update");
const destroy = require("../../../core/user/destroy");

const {saveUser} = new save.SaveClass();
const {readUser} = new read.ReadClass();
const {updateUser} = new update.UpdateClass();
const {deleteUser} = new destroy.DestroyClass();

const saveUserService = async(body) => {
    const result = await saveUser(body);
    return result;
}

const readUserService = async(body)=>{
    const result = await readUser(body);
    return result;
}

const updateUserService = async(body)=>{
    const result = await updateUser(body);
    return result;
}

const deleteUserService = async(body)=>{
    const result = await deleteUser(body);
    return result;
}

module.exports = {saveUserService,readUserService,updateUserService,deleteUserService};
