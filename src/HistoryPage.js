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
                <HistoryElement 
                    name="Spaghetti Carbonara"
                    date="2023/10/14"
                    ingredients={["Eggs", "Balcon", "Garlic"]}
                    instructions={{
                        "Step 1":"Place a large pot of lightly salted water (no more than 1 tablespoon salt) over high heat, and bring to a boil. Fill a large bowl with hot water for serving, and set aside.",
                        "Step 2":"In a mixing bowl, whisk together the eggs, yolks and pecorino and Parmesan. Season with a pinch of salt and generous black pepper.",
                        "Step 3":"Set the water to boil. Meanwhile, heat oil in a large skillet over medium heat, add the pork, and sauté until the fat just renders, on the edge of crispness but not hard. Remove from heat and set aside.",
                        "Step 4":"Add pasta to the water and boil until a bit firmer than al dente. Just before pasta is ready, reheat guanciale in skillet, if needed. Reserve 1 cup of pasta water, then drain pasta and add to the skillet over low heat. Stir for a minute or so.",
                        "Step 5":"Empty serving bowl of hot water. Dry it and add hot pasta mixture. Stir in cheese mixture, adding some reserved pasta water if needed for creaminess. Serve immediately, dressing it with a bit of additional grated pecorino and pepper."
                    }}
                    rating={3}
                ></HistoryElement>
                {history.map((data)=>(
                    <HistoryElement 
                        id={data._id}
                        name={data.name}
                        date="2023/10/14"
                        ingredients={data.ingredients}
                        instructions={data.instructions}
                        rating={data.rating ? Number(data.rating) : 0}
                ></HistoryElement>
                ))}
            </section>
        </div>
    );
};

export default HistoryPage;