import React from 'react'
import { Link } from 'react-router-dom'
import { PageWrapper, Button } from '../components/styled'
import './home.css'
const Home = () => {
    return (
        <PageWrapper>
            <p>Home</p>
            <Button>
                <Link to="/act">Act</Link>
            </Button>
            <Button>
                <Link to="/draw">Draw</Link>
            </Button>
            <Button>
                <Link to="/hunt">Hunt</Link>
            </Button>
        </PageWrapper>
    )
}

export default Home