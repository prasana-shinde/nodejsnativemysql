const save = require("../../../core/post/save");
const read = require("../../../core/post/find");
const update = require("../../../core/post/update");
const destroy = require("../../../core/post/delete");

const {savePost} = new save.SaveClass();
const {readPost} = new read.ReadClass();
const {updatePost} = new update.UpdateClass();
const {deletePost} = new destroy.DestroyClass();

const savePostService = async(body) => {
    const result = await savePost(body);
    return result;
}

const readPostService = async(body)=>{
    const result = await readPost(body);
    return result;
}

const updatePostService = async(body)=>{
    const result = await updatePost(body);
    return result;
}

const deletePostService = async(body)=>{
    const result = await deletePost(body);
    return result;
}

module.exports = {savePostService,readPostService,updatePostService,deletePostService};
