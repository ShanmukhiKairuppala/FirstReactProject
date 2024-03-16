//Dynamic composing of data

import React from "react";
const datas = [
    {name:"John",age:20},
    {name:"Clare",age:22},
    {name:"Mary",age:19},
    {name:"George",age:20},
     { name:"Jack",age:20}
    ]

function BoxNum(){
    return(
        <div className="purple">
            {datas.map((data,index)=> (
                <div id="d1" key={index}>
                    <h1>Name : {data.name}</h1>
                    <h4>Age : {data.age}</h4>
                </div>
            ))}
        </div>
    );
}
export default BoxNum