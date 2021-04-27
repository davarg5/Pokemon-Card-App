import pokemonAPI from '../api/pokemonAPI';

import '../Cards.scss';
import { Button } from 'reactstrap';

const CollectionPage = (props) => {
    const { user, setUser } = props

    const removeFromCollection = async(e, card) => {
        e.preventDefault()
        await pokemonAPI.deleteCard(card.id, user.token)
        let updatedUser = await pokemonAPI.fetchUser(user.user.id);
        let userObj = await {
            token: user.token,
            user: updatedUser
        }
        localStorage.setItem('user', JSON.stringify(userObj))
        setUser(JSON.parse(localStorage.getItem('user')))
    }

    return (
        <div>
            <h2>Your Collection</h2> 
            <div>No. of cards: {user.user.cards.length}</div>
            <div className='all-cards'>
            {user.user.cards.map((card, ind) => {
                return (
                    <div key={ind} id='cards'>
                        <figure className={`card card--${card.pokemon_type}`}>
                            <div className="card__image-container">
                                <img src={`${card.sprite}`} alt={`${card.name}`} className="card__image" />   
                            </div>
                            
                            <figcaption className="card__caption">
                                <h1 className="card__name">{card.name}</h1>

                                <h3 className="card__type">
                                {card.pokemon_type}
                                </h3>
                                
                                <table className="card__stats">
                                <tbody><tr>
                                    <th>HP</th>
                                    <td>{card.hp}</td>
                                </tr>
                                <tr>
                                    <th>Attack</th>
                                    <td>{card.attack}</td>
                                </tr>
                                
                                <tr>
                                    <th>Defense</th>
                                    <td>{card.defense}</td>
                                </tr>

                                <tr>
                                    <th>Special Attack</th>
                                    <td>{card.sp_attack}</td>
                                </tr>
                                <tr>
                                    <th>Special Defense</th>
                                    <td>{card.sp_defense}</td>
                                </tr>
                                <tr>
                                    <th>Speed</th>  
                                    <td>{card.speed}</td>
                                </tr>
                                </tbody></table>
                                
                                <div className="card__abilities">
                                <h4 className="card__ability">
                                    <span className="card__label">Ability</span>
                                    {card.ability}
                                </h4>
                                {/* <h4 className="card__ability">
                                    <span className="card__label">Hidden Ability</span>
                                    Anticipation
                                </h4> */}
                                <Button onClick={(e) => removeFromCollection(e, card)} outline color="secondary">Remove from collection</Button>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default CollectionPage