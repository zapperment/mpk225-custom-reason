return {{
    pattern = "b0 02 xx",
    name = "Knob 1"
}, {
    pattern = "b0 03 xx",
    name = "Knob 2"
}, {
    pattern = "b0 04 xx",
    name = "Knob 3"
}, {
    pattern = "b0 05 xx",
    name = "Knob 4"
}, {
    pattern = "b0 06 xx",
    name = "Knob 5"
}, {
    pattern = "b0 07 xx",
    name = "Knob 6"
}, {
    pattern = "b0 08 xx",
    name = "Knob 7"
}, {
    pattern = "b0 09 xx",
    name = "Knob 8"
}, {
    pattern = "b1 02 xx",
    name = "Knob 9"
}, {
    pattern = "b1 03 xx",
    name = "Knob 10"
}, {
    pattern = "b1 04 xx",
    name = "Knob 11"
}, {
    pattern = "b1 05 xx",
    name = "Knob 12"
}, {
    pattern = "b1 06 xx",
    name = "Knob 13"
}, {
    pattern = "b1 07 xx",
    name = "Knob 14"
}, {
    pattern = "b1 08 xx",
    name = "Knob 15"
}, {
    pattern = "b1 09 xx",
    name = "Knob 16"
}, {
    pattern = "b2 02 xx",
    name = "Knob 17"
}, {
    pattern = "b2 03 xx",
    name = "Knob 18"
}, {
    pattern = "b2 04 xx",
    name = "Knob 19"
}, {
    pattern = "b2 05 xx",
    name = "Knob 20"
}, {
    pattern = "b2 06 xx",
    name = "Knob 21"
}, {
    pattern = "b2 07 xx",
    name = "Knob 22"
}, {
    pattern = "b2 08 xx",
    name = "Knob 23"
}, {
    pattern = "b2 09 xx",
    name = "Knob 24"
}, {
    pattern = "b0 15 xx",
    name = "Switch 1"
}, {
    pattern = "b0 16 xx",
    name = "Switch 2"
}, {
    pattern = "b0 17 xx",
    name = "Switch 3"
}, {
    pattern = "b0 18 xx",
    name = "Switch 4"
}, {
    pattern = "b1 15 xx",
    name = "Switch 5"
}, {
    pattern = "b1 16 xx",
    name = "Switch 6"
}, {
    pattern = "b1 17 xx",
    name = "Switch 7"
}, {
    pattern = "b1 18 xx",
    name = "Switch 8"
}, {
    pattern = "b3 15 xx",
    name = "Switch 9"
}, {
    pattern = "b3 16 xx",
    name = "Switch 10"
}, {
    pattern = "b3 17 xx",
    name = "Switch 11"
}, {
    pattern = "b3 18 xx",
    name = "Switch 12"
}, {
    pattern = "e? xx yy",
    name = "Pitch Bend",
    value = "y*128 + x"
}, {
    pattern = "b0 01 xx",
    name = "Mod Wheel"
}, {
    pattern = "b0 0b xx",
    name = "Expression"
}, {
    pattern = "b0 40 xx",
    name = "Damper Pedal"
}, {
    pattern = "d? xx",
    name = "Channel Pressure"
}, -- pad bank D serves as buttons, sending on MIDI ch 5:
{
    pattern = "94 00 ??",
    name = "Pad D1",
    value = "1"
}, {
    pattern = "94 01 ??",
    name = "Pad D2",
    value = "1"
}, {
    pattern = "94 02 ??",
    name = "Pad D3",
    value = "1"
}, {
    pattern = "94 03 ??",
    name = "Pad D4",
    value = "1"
}, {
    pattern = "94 04 ??",
    name = "Pad D5",
    value = "1"
}, {
    pattern = "94 05 ??",
    name = "Pad D6",
    value = "1"
}, {
    pattern = "94 06 ??",
    name = "Pad D7",
    value = "1"
}, {
    pattern = "94 07 ??",
    name = "Pad D8",
    value = "1"
}, -- regular keyboard and Pad Bank A send on MIDI ch 1:
{
    pattern = "90 xx 00",
    name = "Keyboard",
    value = "0",
    note = "x",
    velocity = "64"
}, {
    pattern = "<100x>0 yy zz",
    name = "Keyboard"
}, -- Pad Bank B sends on MIDI ch 3:
{
    pattern = "92 xx 00",
    name = "Keyboard",
    value = "0",
    note = "x",
    velocity = "64"
}, {
    pattern = "<100x>2 yy zz",
    name = "Keyboard"
}, -- Pad Bank C sends on MIDI ch 4:
{
    pattern = "93 xx 00",
    name = "Keyboard",
    value = "0",
    note = "x",
    velocity = "64"
}, {
    pattern = "<100x>3 yy zz",
    name = "Keyboard"
}, {
    pattern = "b0 72 xx",
    name = "Loop",
    value = "1"
}, {
    pattern = "b0 73 xx",
    name = "Rewind",
    value = "1"
}, {
    pattern = "b0 74 xx",
    name = "Fast Forward",
    value = "1"
}, {
    pattern = "b0 75 xx",
    name = "Stop",
    value = "1"
}, {
    pattern = "b0 76 xx",
    name = "Play",
    value = "1"
}, {
    pattern = "b0 77 xx",
    name = "Record",
    value = "1"
}}
