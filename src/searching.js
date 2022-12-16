import React from "react";
import manga from './assets/mangs.json';

const setter = ({setGenres, genres, filterItem}) => {
    return (
        <>
        <div>
            {genres.map((Val,id) => {
                return(
                    <button className="button-27" key={id} onClick={() => filterItem(Val)}>
                        {Val}
                    </button>
                );
            }
            
            )}
            <button className="button-27" onClick={() => setGenres(manga)}>All
            </button>
        </div>
        </>
    );
};

export default setter

