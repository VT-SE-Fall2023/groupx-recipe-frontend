import React from 'react';
import './App.css';
import './css/HistoryPage.css';

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
                            <img src={require('./img/emptystar-icon.png')} alt="Full Star Logo" />
                            <img src={require('./img/emptystar-icon.png')} alt="Full Star Logo" />
                        </div>
                        <button className='rate-button'>Rate</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HistoryPage;