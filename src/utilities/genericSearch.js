export default function genericFilter(item, title) {
    const value = item[title];

    if (typeof (value) === "string" || typeof (value) === "number") {
        return value.toString().toLocaleLowerCase().includes(query.toLowerCase())
    }
    return false;
}
