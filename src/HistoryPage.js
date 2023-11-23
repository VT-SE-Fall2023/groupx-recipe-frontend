import React from 'react';
import './App.css';
import './css/HistoryPage.css';
import HistoryElement from './HistoryElement';
import { useHistoryContext } from './context/HistoryContext';


function HistoryPage() {

    const {history} = useHistoryContext();

    return (
        <div className='history-page'>
            <h1 className='main-title'>Recipe History</h1>
            <section className='menus'>
                { history && history.length > 0 
                    ? history.map((data)=>(
                    <HistoryElement 
                        id={data._id}
                        name={data.name}
                        date="2023/10/14"
                        ingredients={data.ingredients}
                        instructions={data.instructions}
                        rating={data.rating ? Number(data.rating) : 0}
                    ></HistoryElement>))
                    : (<p>You have no history recipes!</p>)
                }
            </section>
        </div>
    );
};

export default HistoryPage;