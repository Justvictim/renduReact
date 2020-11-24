import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'

export default function AddMovies() {

    let dispatch = useDispatch();

    let [ name, setName ] = useState('')
    let [ category, setCategory ] = useState('')

    return (
        <Container>
            
            <input placeholder='Titre' value={name} onChange={(event) => setName(event.target.value)} /> 
            <br/>

            <input placeholder='Catégorie' value={category} onChange={(e) => setCategory(e.target.value)}/>
            <Button onClick={() => dispatch({ type: 'ADD_MOVIE', data: {title: name, category: category }})}>ADD</Button>
           
        </Container>
    )

}