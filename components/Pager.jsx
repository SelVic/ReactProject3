import React from "react";
import {Link} from "@reach/router";

const Pager = props => {
    let pages = [1,2,3,4,5,6,7,8,9,10];
    let total = 10;
    let current = 1;
    let firstPage = 1;
    let visible = 5;
    let sides = visible/2
    let PrevPage;
    let NextPage;
    if (firstPage ) {
        visible = Math.abs(sides - firstPage) + 1;
    }

    if (current > sides)
        firstPage = current - sides;

    // for (let i=0; i < visible; i++ ){
    //     pages.push(i + firstPage)
    // }
    return (
        <div>
            {
                pages.map((p, i) => <Link to='/'>{p}{<a onClick={current => i}></a>}{"   "}</Link>)
            }
        </div>

    )
}

export default Pager