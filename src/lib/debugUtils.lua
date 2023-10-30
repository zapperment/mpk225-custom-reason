local midiUtils = require("src.lib.midiUtils")

local logMessages = {}
local maxLogMessages = 100

local function log(message)
    table.insert(logMessages, message)
    -- if the codec is not running in debug mode, the logs are never dumped
    -- we need to limit the number of log messages to prevent memory leaks
    if #logMessages > maxLogMessages then
        table.remove(logMessages, 1)
    end
end

local function dumpLog()
    local events = {}
    for _, message in pairs(logMessages) do
        table.insert(events, midiUtils.makeLogEvent(message))
    end
    logMessages = {}
    return events
end

return {
    log = log,
    dumpLog = dumpLog
}
