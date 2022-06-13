function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return  function named(){
        return ;
    }
}
function returnsAnAnonymousFunction(){
    return ()=>{}
} 
