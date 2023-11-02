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
                </div>
            </section>
        </div>
    );
};

export default HistoryPage;