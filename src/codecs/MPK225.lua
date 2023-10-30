local items = require("src.lib.items")
local inputs = require("src.lib.inputs")
local debugUtils = require("src.lib.debugUtils")

local log = debugUtils.log

-- This function is called when Remote is auto-detecting surfaces. manufacturer and model are
-- strings specifying the model being auto-detected. This function is always called once for
-- each supported model.
function remote_probe()
    local controlRequest = "F0 7E 7F 06 01 F7"
    local controlResponse = "F0 7E 00 06 02 47 23 00 19 00 ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? F7"
    return {
        request = controlRequest,
        response = controlResponse
    }
end

-- remote_init() is called when a control surface instance is setup for use. Each instance of
-- a control surface uses its own Lua environment. This function should be used to register
-- all control surface items, using remote.define_items(). It can also be used to register
-- automatic handling of input and output, with remote.define_auto_inputs() and
-- remote.define_auto_outputs(). The define_* functions can only be called from remote_init().
function remote_init()
    remote.define_items(items)
    remote.define_auto_inputs(inputs)
    log("Akai MPK225 remote control surface initialised successfully")
end

-- KEYBOARD => CODEC
-- This function is called for each incoming MIDI event. This is where the codec interprets
-- the message and translates it into a Remote message. The translated message is then
-- passed back to Remote with a call to remote.handle_input(). If the event was translated
-- and handled this function should return true, to indicate that the event was used. If the
-- function returns false, Remote will try to find a match using the automatic input registry
-- defined with remote.define_auto_inputs().
function remote_process_midi()
    --log("Received MIDI event: " .. debugUtils.midiEventToString(event))
    return false
end

-- CODEC => KEYBOARD
-- This function is called at regular intervals when the host is due to update the control
-- surface state. The return value should be an array of MIDI events.
function remote_deliver_midi(_, port)
    if (port == 2) then
        -- send log messages as system exclusive MIDI messages
        return debugUtils.dumpLog()
    end

    -- return a table with MIDI events to be delivered;
    -- currently none, pending further custom implementation
    return {}
end
