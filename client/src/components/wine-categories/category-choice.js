import React from 'react';

const CategoryChoice = (props) => {
    return (
        <form onSubmit={props.getChoices}>
            <h3>Don't Make Me Think</h3>
            {/* <input type="text" name="wineCategory"></input> */}
            <select type="text" name="wineCategory">
                <option value="">Please Choose</option>
                <option value="t">Top Rated</option>
                <option value="m">Most Recent</option>
                <option value="p">Popular Varietals</option>
                <option value="tre">Top Rated Reds</option>
                <option value="twh">Top Rated Whites</option>
                <option value="tro">Top Rates Roses</option>
                <option value="mre">Most Recent Reds</option>
                <option value="mwh">Most Recent Whites</option>
                <option value="mro">Most Recent Roses</option>
            </select>
            <br /><button>Submit</button>
        </form>
    );
}

export default CategoryChoice;