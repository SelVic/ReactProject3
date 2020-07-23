import React from "react";
import {Link} from "@reach/router";

const Header = () => {
    return(
        <div>
            <Link className="header" to="/">
                <i className="view-data-icon fa fa-film mr-20"/>
                Киносправочник
            </Link>
        </div>
    )
}

export {Header}