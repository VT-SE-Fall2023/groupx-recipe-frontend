import React from 'react';
import './App.css';
import './css/HistoryPage.css';
import HistoryElement from './HistoryElement';



function HistoryPage() {

    return (
        <div className='history-page'>
            <h1 className='main-title'>Recipe History</h1>
            <section className='menus'>
                <div className='expand-section'>
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
                    <p className='menu-ingredients'>Ingredients: Eggs, Balcon, Garlic</p>
                    <p className='menu-steps'>
                        Step 1<br/>
                        Place a large pot of lightly salted water (no more than 1 tablespoon salt) over high heat, 
                        and bring to a boil. Fill a large bowl with hot water for serving, and set aside.
                    </p>
                    <p className='menu-steps'>
                        Step 2<br/>
                        In a mixing bowl, whisk together the eggs, yolks and pecorino and Parmesan. 
                        Season with a pinch of salt and generous black pepper.
                    </p>
                    <p className='menu-steps'>
                        Step 3<br/>
                        Set the water to boil. Meanwhile, heat oil in a large skillet over medium heat, add the pork, 
                        and sauté until the fat just renders, on the edge of crispness but not hard. Remove from heat and set aside.
                    </p>
                    <p className='menu-steps'>
                        Step 4<br/>
                        Add pasta to the water and boil until a bit firmer than al dente. Just before pasta is ready, reheat guanciale in skillet, if needed. 
                        Reserve 1 cup of pasta water, then drain pasta and add to the skillet over low heat. Stir for a minute or so.
                    </p>
                    <p className='menu-steps'>
                        Step 5<br/>
                        Empty serving bowl of hot water. Dry it and add hot pasta mixture. Stir in cheese mixture, 
                        adding some reserved pasta water if needed for creaminess. Serve immediately, dressing it 
                        with a bit of additional grated pecorino and pepper.
                    </p>
                </div>
                <div className='normal-section'>
                    <h5 className='menu-title'>Lasagna</h5>
                    <div className='functions'>
                        <p className='menu-date'>2023/10/07</p>
                        <div className='menu-rate'>
                            <img src={require('./img/fullstar-icon.png')} alt="Full Star Logo" />
                            <img src={require('./img/fullstar-icon.png')} alt="Full Star Logo" />
                            <img src={require('./img/fullstar-icon.png')} alt="Full Star Logo" />
                            <img src={require('./img/fullstar-icon.png')} alt="Full Star Logo" />
                            <img src={require('./img/emptystar-icon.png')} alt="Empty Star Logo" />
                        </div>
                        <button className='rate-button'>Rate</button>
                    </div>
                </div>
                <div className='normal-section'>
                    <h5 className='menu-title'>Mac and Cheese</h5>
                    <div className='functions'>
                        <p className='menu-date'>2023/10/01</p>
                        <div className='menu-rate'>
                            <img src={require('./img/fullstar-icon.png')} alt="Full Star Logo" />
                            <img src={require('./img/fullstar-icon.png')} alt="Full Star Logo" />
                            <img src={require('./img/fullstar-icon.png')} alt="Full Star Logo" />
                            <img src={require('./img/emptystar-icon.png')} alt="Empty Star Logo" />
                            <img src={require('./img/emptystar-icon.png')} alt="Empty Star Logo" />
                        </div>
                        <button className='rate-button'>Rate</button>
                    </div>
                </div>
                <HistoryElement></HistoryElement>
            </section>
        </div>
    );
};

export default HistoryPage;