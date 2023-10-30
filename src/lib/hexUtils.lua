local function textToHex(text)
    local hex = ""
    for i = 1, string.len(text) do
        hex = hex .. decToHex(string.byte(text, i))
        if i ~= text_len then
            hex = hex .. " "
        end
    end
    return hex
end

return {
    textToHex = textToHex
}
