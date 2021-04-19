import axios from 'axios'
import { useEffect, useState } from 'react'
import '../Cards.scss'

const CardsPage = (props) => {
    const { allCards, setAllCards } = props
    const [cardDetails, setCardDetails] = useState([])
    let cards = []

    const getDetails = () => {
        let oldCards = [...allCards]
        for(let i=0;i<oldCards.length;i++) {
            axios.get(oldCards[i].url)
                .then(res => {
                    cards.push(res.data)
                })
        }
        return cards
    }

    useEffect(() => {
        setCardDetails(getDetails())
    }, [])

    console.log(cardDetails)

    return (
        <div>
            <h2>Cards</h2>
            {allCards.map((card, ind) => {
                return (
                    <div key={ind} id='all-cards'>
                        <figure className="card card--normal">
                            <div className="card__image-container">
                                <img src="https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/1200px-133Eevee.png" alt="Eevee" className="card__image" />   
                            </div>
                            
                            <figcaption className="card__caption">
                                <h1 className="card__name">Eevee</h1>

                                <h3 className="card__type">
                                normal
                                </h3>

                                <table className="card__stats">
                                <tbody><tr>
                                    <th>HP</th>
                                    <td>55</td>
                                </tr>
                                <tr>
                                    <th>Attack</th>
                                    <td>55</td>
                                </tr>
                                
                                <tr>
                                    <th>Defense</th>
                                    <td>50</td>
                                </tr>

                                <tr>
                                    <th>Special Attack</th>
                                    <td>45</td>
                                </tr>
                                <tr>
                                    <th>Special Defense</th>
                                    <td>65</td>
                                </tr>
                                <tr>
                                    <th>Speed</th>  
                                    <td>55</td>
                                </tr>
                                </tbody></table>
                                
                                <div className="card__abilities">
                                <h4 className="card__ability">
                                    <span className="card__label">Ability</span>
                                    Run Away
                                </h4>
                                <h4 className="card__ability">
                                    <span className="card__label">Hidden Ability</span>
                                    Anticipation
                                </h4>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                )
            })}
        </div>
    )
}

export default CardsPage;