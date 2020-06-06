import React from "react";

const Pager = props => {
    let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let maxVisible = 3;
    let current = 1;
    let firstPage = 1;
    let visible = 5;
    let sides = visible/2

    // let PrevPage;
    // let NextPage;
    if (firstPage ) {
        maxVisible = Math.abs(sides - firstPage) + 1;
    }

    //подумать над счетом середины
    //окргуление?
    if (current > sides)
        firstPage = current - sides;
    // else if ()

    for (let i=0; i < maxVisible; i++ ){
        //??
        pages.push()
    }
    return (
        <div>
            {/*PrevPage*/}
            {
                pages.map((p,i) => p)
            }
        </div>
    )
}

export default Pager