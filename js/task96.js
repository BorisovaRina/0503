function parseJSON(str) {
    let i = 0;
    
    function parseValue() {
        skipWhitespace();
        const char = str[i];
        
        switch(char) {
            case '{':
                return parseObject();
            case '[':
                return parseArray();
            case '"':
                return parseString();
            case 't':
            case 'f':
                return parseBoolean();
            case 'n':
                return parseNull();
            default:
                return parseNumber();
        }
    }
    
    function parseObject() {
        const obj = {};
        i++; // skip '{'
        skipWhitespace();
        
        while (str[i] !== '}') {
            const key = parseString();
            skipWhitespace();
            i++; // skip ':'
            const value = parseValue();
            obj[key] = value;
            skipWhitespace();
            if (str[i] === ',') i++;
            skipWhitespace();
        }
        
        i++; // skip '}'
        return obj;
    }
    
    function parseArray() {
        const arr = [];
        i++; // skip '['
        skipWhitespace();
        
        while (str[i] !== ']') {
            arr.push(parseValue());
            skipWhitespace();
            if (str[i] === ',') i++;
            skipWhitespace();
        }
        
        i++; // skip ']'
        return arr;
    }
    
    function parseString() {
        i++; // skip opening '"'
        let result = '';
        while (str[i] !== '"') {
            result += str[i++];
        }
        i++; // skip closing '"'
        return result;
    }
    
    function parseNumber() {
        let num = '';
        while (i < str.length && /[0-9.-]/.test(str[i])) {
            num += str[i++];
        }
        return Number(num);
    }
    
    function parseBoolean() {
        if (str.substr(i, 4) === 'true') {
            i += 4;
            return true;
        } else {
            i += 5;
            return false;
        }
    }
    
    function parseNull() {
        i += 4;
        return null;
    }
    
    function skipWhitespace() {
        while (i < str.length && /\s/.test(str[i])) {
            i++;
        }
    }
    
    return parseValue();
}

const jsonStr = '{"name":"John","age":30,"active":true}';
console.log("JSON Parser:");
console.log("Input:", jsonStr);
console.log("Output:", parseJSON(jsonStr));
