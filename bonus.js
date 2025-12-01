function createCounter(init){
    let origin=init
    return{
        increment: function() {
            origin += 1;
            return origin;
        },
        decrement: function() {
            origin -= 1;
            return origin;
        },
        reset: function() {
            origin = init;
            return origin;
        }
    };
}
    