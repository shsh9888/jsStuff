

let Emiiter = {
    eventMap: new Map(),

    subscribe : function (eventName, callback) {
        console.log("Subscriber have been called with ", eventName, callback)
        // return the object itself so that it can be released
        this.eventMap.set(eventName,callback)
        let self = this

        return {
            release : function () {
                // console.log("Called with arguments",this,arguments)
                self.eventMap.delete(eventName)
            }
        }
    },

    emit : function (eventName, ...rest) {
        if (this.eventMap.has(eventName)) {
            this.eventMap.get(eventName).apply(this, rest)
        }else {
            console.log("There are no such events!!!")
        }

    },

    // release : function () {
    //     console.log("Called with arguments",this,arguments)
    //     this.eventMap.delete(this.eventName)
    //
    // }

}


let emitter = Object.create(Emiiter);
// 1. Support subscribing to events.
sub1 = emitter.subscribe('event_name1', (a,b)=>{console.log("eventname1 with",a,b)});
sub2 = emitter.subscribe('event_name2', ()=>{console.log("eventname2")});

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name1', "shravan", "keval");

// 3. Support unsubscribing existing subscriptions by releasing them.
sub1.release(); // `sub` is the reference returned by `subscribe` above
emitter.emit('event_name1', "shravan", "keval");
