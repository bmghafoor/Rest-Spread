function filterOutOdds(...args){
    return args.filter((value)=> value % 2 !== 0)
}

function findMin(...args){
    return Math.min(...args)
}

function mergeObjects(obj1,obj2){
    return{...obj1,...obj2}
}

function doubleReturn(arr,...args){
    return [...arr,...args.map(value => value*2)]
}

const removeRandom = (...args) => {
    const randNum =  Math.floor(Math.random() * args.length);
    console.log(randNum)
    args.splice(randNum,1)
    return args
}

const extend = (arr1,arr2) => {
    const newArray = [...arr1,...arr2]
    return newArray
}

const addKeyVal = (obj,key,val) => {
    return {...obj, [key] : val}
}

const removeKey = (obj,key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj

}

const combine = (obj1,obj2) => {
    return{...obj1,...obj2}
}

const update = (obj,key,value) => {
    let newObj = {...obj}
    newObj[key] = value
}