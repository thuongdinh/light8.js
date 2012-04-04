var events;

module("Events", {
    setup: function() {
        events = new light8.Event();
    }
});

test("there are only 1 event", function () {

    // create event object
    var DUMP_EVENT = "dumpEvent",
        PARAM01 = "param01",
        PARAM02 = 1,

        eventCallback = function (data1, data2) {
            ok(data1 === PARAM01);
            ok(data2 === PARAM02);
        };

    // expect that there are only 2 assert method called
    expect(2);

    // add once event
    events.bind(DUMP_EVENT, eventCallback);

    // trigger event
    events.trigger(DUMP_EVENT, PARAM01, PARAM02);

    // unbind the event
    events.unbind(DUMP_EVENT, eventCallback);

    // trigger event again to make sure callback is removed
    events.trigger(DUMP_EVENT, PARAM01, PARAM02);
});

test("more than one callback in a event", function () {

    // create event object
    var DUMP_EVENT = "dumpEvent",
        PARAM01 = "param01",
        PARAM02 = 1,

        eventCallback1 = function (data1, data2) {
            ok(data1 === PARAM01);
            ok(data2 === PARAM02);
            ok(true, 'This is event callback 1');
        },

        eventCallback2 = function (data1, data2) {
            ok(data1 === PARAM01);
            ok(data2 === PARAM02);
            ok(true, 'This is event callback 2');
        };

    // expect that there are only 2 assert method called
    expect(9);

    // add event's callback
    events.bind(DUMP_EVENT, eventCallback1);
    events.bind(DUMP_EVENT, eventCallback2);

    // trigger event should be call eventCallback1 & eventCallback2
    events.trigger(DUMP_EVENT, PARAM01, PARAM02);

    // unbind the eventCallback1
    events.unbind(DUMP_EVENT, eventCallback1);

    // trigger event again to make sure eventCallback1 is removed
    events.trigger(DUMP_EVENT, PARAM01, PARAM02);

    // clean should work here
    events.clean(DUMP_EVENT);

    // trigger event again to make sure all callback of DUMP_EVENT are removed
    events.trigger(DUMP_EVENT, PARAM01, PARAM02);
});

test("two events", function () {

    // create event object
    var DUMP_EVENT1 = "dumpEvent1",
        DUMP_EVENT2 = "dumpEvent2"
        PARAM01 = "param01",
        PARAM02 = 1,

        eventCallback1 = function (data1, data2) {
            ok(data1 === PARAM01);
            ok(data2 === PARAM02);
            ok(true, 'This is event callback 1');
        },

        eventCallback2 = function (data1, data2) {
            ok(data1 === PARAM01);
            ok(data2 === PARAM02);
            ok(true, 'This is event callback 2');
        };

    // expect that there are only 2 assert method called
    expect(18);

    // add event1's callback
    events.bind(DUMP_EVENT1, eventCallback1);
    events.bind(DUMP_EVENT1, eventCallback2);

    // add event2's callback
    events.bind(DUMP_EVENT2, eventCallback1);
    events.bind(DUMP_EVENT2, eventCallback2);

    // trigger event should be call eventCallback1 & eventCallback2
    events.trigger(DUMP_EVENT1, PARAM01, PARAM02);
    events.trigger(DUMP_EVENT2, PARAM01, PARAM02);

    // unbind the eventCallback1
    events.unbind(DUMP_EVENT1, eventCallback1);
    events.unbind(DUMP_EVENT2, eventCallback1);

    // trigger event again to make sure eventCallback1 is removed
    events.trigger(DUMP_EVENT1, PARAM01, PARAM02);
    events.trigger(DUMP_EVENT2, PARAM01, PARAM02);

    // clean should work here
    events.clean(DUMP_EVENT1);
    events.clean(DUMP_EVENT2);

    // trigger event again to make sure all callback of DUMP_EVENT are removed
    events.trigger(DUMP_EVENT1, PARAM01, PARAM02);
    events.trigger(DUMP_EVENT2, PARAM01, PARAM02);
});

test("stress test, 1000 events, each event has 10 callback", function () {

    // create event object
    var DUMP_EVENT = "dumpEvent",
        PARAM01 = "param01",
        PARAM02 = 1,

        eventName,

        totalEvents = 1000,
        totalCallbacks = 10,

        assertFlag = 0;

    // preparing data for events
    for(var i = 0; i < totalEvents; i++) {
        eventName = DUMP_EVENT + i;
        for (var j = 0; j < totalCallbacks; j ++) {
            events.bind(eventName, function (data1, data2) {
                if (data1 === PARAM01 && data2 === PARAM02) {
                    assertFlag++;
                }
            });
        }
    }

    // trigger events
    for(var i = 0; i < totalEvents; i++) {
        eventName = DUMP_EVENT + i;
        events.trigger(eventName, PARAM01, PARAM02);
    }

    // after trigger event, assertFlag should equal totalEvents * totalCallbacks
    ok(assertFlag === totalEvents * totalCallbacks, 'Called ' + (totalEvents * totalCallbacks) + " callbacks in " + totalEvents + ' events');

    // remove all events
    events.reset();

    // trigger event again to make sure all events are removed
    for(var i = 0; i < totalEvents; i++) {
        eventName = DUMP_EVENT + i;
        events.trigger(eventName, PARAM01, PARAM02);
    }
});

test("stress test, 10 events, each event has 1000 callback", function () {

    // create event object
    var DUMP_EVENT = "dumpEvent",
        PARAM01 = "param01",
        PARAM02 = 1,

        eventName,

        totalEvents = 10,
        totalCallbacks = 1000,

        assertFlag = 0;

    // preparing data for events
    for(var i = 0; i < totalEvents; i++) {
        eventName = DUMP_EVENT + i;
        for (var j = 0; j < totalCallbacks; j ++) {
            events.bind(eventName, function (data1, data2) {
                if (data1 === PARAM01 && data2 === PARAM02) {
                    assertFlag++;
                }
            });
        }
    }

    // trigger events
    for(var i = 0; i < totalEvents; i++) {
        eventName = DUMP_EVENT + i;
        events.trigger(eventName, PARAM01, PARAM02);
    }

    // after trigger event, assertFlag should equal totalEvents * totalCallbacks
    ok(assertFlag === totalEvents * totalCallbacks, 'Called ' + (totalEvents * totalCallbacks) + " callbacks in " + totalEvents + ' events');

    // remove all events
    events.reset();

    // trigger event again to make sure all events are removed
    for(var i = 0; i < totalEvents; i++) {
        eventName = DUMP_EVENT + i;
        events.trigger(eventName, PARAM01, PARAM02);
    }
});