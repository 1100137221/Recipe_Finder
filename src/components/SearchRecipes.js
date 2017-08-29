

import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {setRecipes} from '../actions';

class SearchRecipes extends Component {

    constructor() {
        super();

        this.state = {
            ingredient:"",
            dish:""
        };
    }

    search() {
        let { ingredient,dish } = this.state
        let url = `http://www.recipepuppy.com/api/?i=${ingredient}&q=${dish}` ;
        console.log(url);
        fetch(url,{
            method:"GET"
        }).then(response => response.json())
        .then(res => this.props.setRecipes(res.results) );
    }

    render() {
        return (
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredient</ControlLabel> 
                    { '' }
                    <FormControl type="text" 
                                placeholder="garlic, ckicken"
                                onChange={event=> this.setState({ ingredient:event.target.value })  }>
                    </FormControl>
                </FormGroup>
                { '' }
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel> 
                    { '' }
                    <FormControl type="text" 
                                placeholder="Adobo"
                                onChange={event=> this.setState({ dish:event.target.value })  }>
                    </FormControl>
                </FormGroup>
                <Button onClick={()=> this.search() } >Submit</Button>
            </Form>
        );
    }
}

export default connect(null,{ setRecipes } )( SearchRecipes);
