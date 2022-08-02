var x = 20;
var p = "para";
var z = x + 20;
var obj = {
    1: 10,
    2: 20,
    3: 30,
    4: "sanjeev",
    abc: [1, 2, 3, 4, 5, "abc", [1, 2, "abc"]],
    d: {
        1: [1, 2, 3, "a", "b", { n: "darshan" }],
    },
};
console.log("Hi sanjeev");
console.log(obj["d"][1][5]["n"][0]);