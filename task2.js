var toString = Object.prototype.toString;

const copyObject = (obj) => {
    switch (typeof obj) {
        case "object":
            if (!obj) {
                return null;
            } else {
                switch (toString.call(obj)) {
                    case "[object Array]":
                        return obj.map(copyObject);
                    case "[object Date]":
                        return new Date(obj);
                    case "[object Set]":
                        let tempSet = new Set();
                        obj.forEach((curr) => {
                            const tempObj = copyObject(curr);
                            tempSet.add(tempObj);
                        })

                        return tempSet;
                    case "[object Map]":
                        let tempMap = new Map();
                        obj.forEach((value, key) => {
                            const tempObj = copyObject(value);
                            tempMap.set(key, tempObj);
                        })

                        return tempMap;
                    default:
                        return Object.keys(obj).reduce((prev, key) => {
                            prev[key] = copyObject(obj[key]);
                            return prev;
                        }, {});
                }
            }
        default:
            return obj;
    }
}

const obj = {"array1":['1','2', new Date(), new Set([3, 4]), new Map([[5, 6],[7, 8]])], "obj1":{"num1":9}};
console.log(obj);

const copyObj = copyObject(obj);
console.log(copyObj);

copyObj["array1"][0]=5;
copyObj["obj1"]["num1"]=10;
console.log(copyObj);
