import axios from "axios";

let visits=[]

let dir = {}

let visit = async () => {
    let {data} = await axios.get("http://ec2-3-93-20-197.compute-1.amazonaws.com")
    let srv = data.split("<h1>")[1].split("</h1>")[0]



    dir[srv] = (dir[srv] ? dir[srv] + 1 : 1)
    return srv
}

for(let i = 0; i<2000; i++) {
    visits.push(visit())
    if(i>=100) await visits[i-100];
    console.log(`rq #${i}`)
}


try {
    for(let i = 0; i<2000; i++) {
        await visits[i]
    }
} catch(e) {
    console.log(e)
    console.log("error end")
}


console.log(dir)




