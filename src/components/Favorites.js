import React from 'react'
import './Favorites.css'
import PostCard from './PostCard'
import weightLoss from '../../public/images/weight-loss.jpg'
import { Link } from 'react-feather'

const Favorites = (props) => (
    <div className='container favorite-section'>
        <p>While you're here</p>
        <h3>Check out these nutrition resources</h3>
        <div className='favorite-grid'>
            <PostCard 
                slug='/lose-weight' 
                title='How To Lose It'
                featuredImage={weightLoss}
                excerpt='This is the bit of information we wanted to show about this specific article.'/>
            <PostCard 
                slug='/lose-weight' 
                title='How To Lose It'
                featuredImage={weightLoss}
                excerpt='This is the bit of information we wanted to show about this specific article.'/>  
            <PostCard 
                slug='/lose-weight' 
                title='How To Lose It'
                featuredImage={weightLoss}
                excerpt='This is the bit of information we wanted to show about this specific article.'/>
        </div>
        <div className='resource-button'>
            <button href='/'>See More Resources</button>
        </div>
    </div>
        
)

export default Favorites