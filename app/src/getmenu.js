import React from 'react';
import Home from 'home.js';

function Meal(props) {
    if (props.page === "Home") {
        return <Home />;
    }
    let Foodfilter = props.data.filter(
        (meal) => meal.category.title === props.page
    );
        return (
            <>
                {Foodfilter.map((entree, i) => {
                    return (
                        <div
                            className='col-md-6 col-sm-12'
                            key={entree.id}
                        >
                            <div className='card'>
                                <div className='card-body'>
                                    <h3 className="card-title">
                                        {entree.title}
                                    </h3>
                                    <h5 className="card-text">
                                        {'$' = entree.price}
                                    </h5>
                                    <div className='card-text'>
                                        {entree.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
            }
            export default Meal


        // const menu = (
        //     <div className='menu'>
        //         <h2>MENU</h2>
        //         <h3>Appetizers</h3>
        //         <ul>
        //             {data.filter(item => [17, 32, 45, 83, 66, 80].includes(item.id)).map(item => 
        //                 <li key={item.id}>
        //                 {item.title}{"    $"}{item.price}
        //                 </li>
        //              )}
        //         </ul>

        //         <h3>Entrees</h3>
        //         <ul>
        //             {data.filter(item => [21, 28, 68, 86, 89, 64, 54].includes(item.id)).map(item => 
        //                 <li key={item.id}>
        //                 {item.title}{"    $"}{item.price}
        //                 </li>
        //              )}
        //         </ul>

        //         <h3>Desserts</h3>
        //         <ul>
        //             {data.filter(item => [5, 22, 29, 85, 91].includes(item.id)).map(item => 
        //                 <li key={item.id}>
        //                 {item.title}{"    $"}{item.price}
        //                 </li>
        //              )}
        //         </ul>
        //     </div>
        // );

        



 

