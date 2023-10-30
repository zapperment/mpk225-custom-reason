local constants = require("src.lib.constants")
local hexUtils = require("src.lib.hexUtils")

local function makeLogEvent(msg)
    local event = constants.sysexHeader .. " " .. hexUtils.textToHex(msg) .. "F7"
    return remote.make_midi(event)
end

return {
    makeLogEvent = makeLogEvent
}
