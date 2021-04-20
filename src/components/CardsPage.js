import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Cards.scss';
import { Button } from 'reactstrap';

const CardsPage = (props) => {
    const { cardDetails, numCards, setNumCards } = props

    const loadMore = e => {
        e.preventDefault()
        setNumCards(numCards+5)
    }

    // useEffect(() => {
    //     setCardDetails(getDetails())
    // // }, [])

    return (
        <div>
            <h2>Cards</h2>
            {cardDetails.map((card, ind) => {
                return (
                    <div key={ind} id='all-cards'>
                        <figure className={`card card--${card.types[0].type.name}`}>
                            <div className="card__image-container">
                                <img src={`${card.sprites.front_default}`} alt={`${card.name}`} className="card__image" />   
                            </div>
                            
                            <figcaption className="card__caption">
                                <h1 className="card__name">{card.name}</h1>

                                <h3 className="card__type">
                                {card.types[0].type.name}
                                </h3>
                                
                                <table className="card__stats">
                                <tbody><tr>
                                    <th>HP</th>
                                    <td>{card.stats[0].base_stat}</td>
                                </tr>
                                <tr>
                                    <th>Attack</th>
                                    <td>{card.stats[1].base_stat}</td>
                                </tr>
                                
                                <tr>
                                    <th>Defense</th>
                                    <td>{card.stats[2].base_stat}</td>
                                </tr>

                                <tr>
                                    <th>Special Attack</th>
                                    <td>{card.stats[3].base_stat}</td>
                                </tr>
                                <tr>
                                    <th>Special Defense</th>
                                    <td>{card.stats[4].base_stat}</td>
                                </tr>
                                <tr>
                                    <th>Speed</th>  
                                    <td>{card.stats[5].base_stat}</td>
                                </tr>
                                </tbody></table>
                                
                                <div className="card__abilities">
                                <h4 className="card__ability">
                                    <span className="card__label">Ability</span>
                                    {card.abilities[0].ability.name}
                                </h4>
                                {/* <h4 className="card__ability">
                                    <span className="card__label">Hidden Ability</span>
                                    Anticipation
                                </h4> */}
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                )
            })}
            <Button onClick={loadMore} outline color="primary">View more cards</Button>
        </div>
    )
}

export default CardsPage;