import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const users = [
  { userName : 'fifa',
    name: 'FIFA WC',
    isFollowing: true
  },
  { userName: 'dualipa',
    name: 'Dua Lipa',
    isFollowing: false
  },
  { userName: 'ernie.codes',
    name: 'Ernie Codes',
    isFollowing: false
  }
]

export function App() {
  return(
    <section className='App'>
      { 
        users.map(({userName, name, isFollowing}) =>(
          //return
            <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
        ))
      }
    </section>
  )
}