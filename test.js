
var object = [
    {
        "x": "2022-04-05T09:11:29.153Z",
        "y": 29
    },
    {
        "x": "2022-04-05T09:11:28.151Z",
        "y": 29
    },
    {
        "x": "2022-04-05T09:11:27.143Z",
        "y": 29
    },
    {
        "x": "2022-04-05T09:11:26.137Z",
        "y": 29
    },
    {
        "x": "2022-04-05T09:11:25.134Z",
        "y": 29
    },
    {
        "x": "2022-04-05T09:11:24.129Z",
        "y": 29
    },
    {
        "x": "2022-04-05T09:11:23.119Z",
        "y": 29
    },
    {
        "x": "2022-04-05T09:11:22.115Z",
        "y": 29
    },
    {
        "x": "2022-04-05T09:11:21.416Z",
        "y": 28
    },
    {
        "x": "2022-04-05T09:11:20.122Z",
        "y": 29
    },
    {
        "x": "2022-04-05T09:11:19.103Z",
        "y": 28
    },
    {
        "x": "2022-04-05T09:11:18.099Z",
        "y": 29
    },
    {
        "x": "2022-04-05T09:11:17.098Z",
        "y": 28
    },
    {
        "x": "2022-04-05T09:11:16.092Z",
        "y": 29
    },
    {
        "x": "2022-04-05T09:11:15.113Z",
        "y": 30
    },
    {
        "x": "2022-04-05T09:11:14.076Z",
        "y": 30
    },
    {
        "x": "2022-04-05T09:11:13.079Z",
        "y": 29
    }
]

var values = Object.values(object);
var final = [];
var counter = 0;
var portion = {};

for (var key in object) {
  if (counter !== 0 && counter % 8 === 0) {
    final.push(portion);
    portion = {};
  }
  portion[key] = values[counter];
  counter++
}
final.push(portion);

console.log(final)




for(var i = 0; i < final.length; i++)
{
    var first = final[Object.keys(final)[0]];
    var second = final[Object.keys(final)[1]];
    var third = final[Object.keys(final)[2]];
}
console.log(first)
console.log(second)
console.log(third)