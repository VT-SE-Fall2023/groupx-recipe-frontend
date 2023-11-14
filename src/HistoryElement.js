import { useState } from 'react';

//props include: recipeName, date, rate, ingredients, steps
function HistoryElement() {

    //check if clicked expand or not
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {setIsExpanded(!isExpanded);};

    const containerStyle = {
        width: '1000px',
        height: isExpanded ? '900px' : '200px',
        border: isExpanded ? '2px solid gray' : 'none',
        cursor: 'pointer',
        transition: 'height 0.5s',
    };

    return (

        <div className='history-element' onClick={handleToggle} style={containerStyle}>
                    <h5 className='menu-title'>Spaghetti Carbonara</h5>
                    <div className='functions'>
                        <p className='menu-date'>2023/10/14</p>
                        <div className='menu-rate'>
                            <img src={require('./img/fullstar-icon.png')} alt="Full Star Logo" />
                            <img src={require('./img/fullstar-icon.png')} alt="Full Star Logo" />
                            <img src={require('./img/fullstar-icon.png')} alt="Full Star Logo" />
                            <img src={require('./img/emptystar-icon.png')} alt="Empty Star Logo" />
                            <img src={require('./img/emptystar-icon.png')} alt="Empty Star Logo" />
                        </div>
                        <button className='rate-button'>Rate</button>
                    </div>
                    {isExpanded 
                        && <p className='menu-ingredients'>Ingredients: Eggs, Balcon, Garlic</p>
                        && <p className='menu-steps'>
                        Step 1<br/>
                        Place a large pot of lightly salted water (no more than 1 tablespoon salt) over high heat, 
                        and bring to a boil. Fill a large bowl with hot water for serving, and set aside.
                        </p>
                    }
                </div>
    )

}

export default HistoryElement;