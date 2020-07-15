import React, {useState} from "react";
import {Link} from "@reach/router";

const Item = props => {
    let {movieItem} = props;
    let [readyCheck, setState] = useState(false)
return(
<Link key = {movieItem.id} to {`/movie/${movieItem.id}`}></Link>
)
}