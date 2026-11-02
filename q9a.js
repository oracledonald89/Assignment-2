function getType(value) {
    if (value === null) {
        return "null";
    }

    if (Array.isArray(value)) {
        return "array";
    }

    if (Number.isNaN(value)) {
        return "NaN";
    }

    return typeof value;
}

console.log(getType(42));
console.log(getType("42"));
console.log(getType(true));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType([1, 2, 3]));
console.log(getType({ a: 1 }));
console.log(getType(function () {}));
console.log(getType(NaN));