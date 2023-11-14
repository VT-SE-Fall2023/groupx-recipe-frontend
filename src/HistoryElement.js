import { useState } from 'react';
import './css/HistoryElement.css';
import Rating from './RatingElement';

//props include: name, date, rate, ingredients, steps
function HistoryElement(props) {

    //check if clicked expand or not
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {setIsExpanded(!isExpanded);};
    const ingredientList = props.ingredients.join(', ')
   
    const containerStyle = {
        width: '1000px',
        height: isExpanded ? '900px' : '200px',
        border: isExpanded ? '2px solid gray' : 'none',
        cursor: 'pointer',
        transition: 'height 0.5s',
    };

    return (

        <div className='history-element' style={containerStyle}>
                    <h5 className='menu-title'>{props.name}</h5>
                    <div className='functions'>
                        <p className='menu-date'>{props.date}</p>
                        <Rating expand= {isExpanded} />
                        <button className='rate-button'>Rate</button>
                        <button className='expand-button' onClick={handleToggle} >expand</button>
                    </div>
                    {isExpanded 
                        && 
                        <div>
                            <p className='menu-ingredients'>{`Ingredients: ${ingredientList}`}</p>
                            <p className='menu-steps'>
                            Step 1<br/>
                            Place a large pot of lightly salted water (no more than 1 tablespoon salt) over high heat, 
                            and bring to a boil. Fill a large bowl with hot water for serving, and set aside.
                            </p>
                        </div>
                    }
                </div>
    )

}

export default HistoryElement;