import { useState } from 'react';
import './css/HistoryElement.css';
import { useEmailContext } from './context/EmailContext';
import { useHistoryContext } from './context/HistoryContext';

import axios from 'axios';

//props include: name, date, rate, ingredients, steps
function HistoryElement(props) {

    //check if clicked expand or not
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {setIsExpanded(!isExpanded);};
    const ingredientList = props.ingredients.join(', ')
    const {email} = useEmailContext();
    const {setUserHistory} = useHistoryContext();
    //map only for array, so have to use Object.entries to convert
    const recipeSteps = Object.entries(props.instructions).map(([step,description])=>
        <p className='menu-steps'>
            Step {parseInt(step)+1}<br/>
            {description}
        </p>
    )
    const menuLength = props.instructions.length


    const containerStyle = {
        width: '1000px',
        height: isExpanded ? `${menuLength * 110}px` : '200px',
        border: isExpanded ? '2px solid gray' : 'none',
        transition: 'height 0.5s',
    };

    const [rating, setRating] = useState(props.rating);
    const handleStarClick = (clickedRating) => {
        if (isExpanded){
            setRating(clickedRating);
        } 
    };

    const handleRateClick = async () => {
        const apiUrl = process.env.REACT_APP_API_URL + "/recipe/rate"
        
        try {
            const response = await axios.post(apiUrl, { id: props.id, rating: rating.toString() });
            console.log(response.data);
            console.log(rating);
            
            // After the rating is successful, fetch user history
            await fetchUserHistory();
        } catch (error) {
            console.error('Rating failed:', error);
        }
    } 

    const fetchUserHistory = async () => {
        const apiUrl = process.env.REACT_APP_API_URL + "/user/recipeHistory";
    
        try {
            const response = await axios.post(apiUrl, { email: email });
            console.log('Recipe fetched succeed', response.data);
            setUserHistory(response.data);
        } catch (error) {
            console.error('Recipe history fetch failed:', error);
        }
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
        const starImg = i <= rating
            ? <img class="rating-star" key={i} src={require('./img/fullstar-icon.png')} alt="Full Star Logo" onClick={() => handleStarClick(i)} />
            : <img class="rating-star" key={i} src={require('./img/emptystar-icon.png')} alt="Empty Star Logo" onClick={() => handleStarClick(i)} />;
        stars.push(starImg);
        }
        return stars;
    };

    return (

        <div className='history-element' style={containerStyle}>
                    <h5 className='menu-title'>{props.name}</h5>
                    <div className='functions'>
                        <p className='menu-date'>{props.date}</p>
                        <div className="rating">
                            {renderStars()}
                        </div>
                        <button className='rate-button' onClick={handleRateClick}>Rate</button>
                        <button className='expand-button' onClick={handleToggle} >expand</button>
                    </div>
                    {isExpanded 
                        && 
                        <div>
                            <p className='menu-ingredients'>{`Ingredients: ${ingredientList}`}</p>
                            {recipeSteps}
                        </div>
                    }
                </div>
    )

}

export default HistoryElement;