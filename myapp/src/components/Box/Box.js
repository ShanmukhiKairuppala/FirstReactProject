import React from "react";
/*to avoid writing multiple boxes - create box component*/
function Box(props){
    console.log(props);
    return (
        <div className="green">
            <div className="purple">
                <div className="red">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default Box