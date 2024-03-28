const isCorrect = (str) => {
    let stack = [];
    let compliance = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i=0; i < str.length; i++) {
        const elm = str[i];
        const comp = compliance[elm];

        if (comp) {
            if (comp !== stack.at(-1)) {
                return false;
            }

            stack.pop();
        } else {
            stack.push(elm);
        }
    }
    
    if (!stack.length) return true;

    return false;
}

const testString = '([])';

console.log(isCorrect(testString));