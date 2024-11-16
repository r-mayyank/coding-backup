type User12 = {
    id: string,
    name: string
}

const users32 = new Map<string, User12>();
users32.set("first", {id: "first", name: "may"})
users32.set("second", {id: "second", name: "mayajk"})

// We used to do users32[first].name;
const user = users32.get("first")
users32.delete("first");