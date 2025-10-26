import Myth from "../models/Myth.js";

export function getAll() {
    return Myth.find();//.select({name: true, need: true, imageUrl: true, location:true}); //.select({title: true, category: true, imageUrl: true}) is not mandatory or required, just to return only these fields
}

export function getOne(mythId) {
    const found = Myth.findById(mythId).populate(['owner', 'likedList']);
    return found;
}

export function getLatest(){
    return Myth.find()
    .sort({_id: -1}) // if timestaps:true in model, you can sort by createdAt: -1: .sort({createdAt: -1})
    .limit(3).select({name: true, origin: true, imageUrl: true});
}

export function create(mythData, userId) {
    return Myth.create({
        ...mythData, 
        owner: userId
    });
}

export function edit(mythId, mythData){
    const found = Myth.findByIdAndUpdate(mythId, mythData, {runValidators: true});
    return found;
}

export async function remove(mythId, userId) {
    const myth = await Myth.findById(mythId);

    if(!myth.owner.equals(userId)){
        throw new Error('You are not the owner of this myth post!');
    }
    
    return Myth.findByIdAndDelete(mythId);
}