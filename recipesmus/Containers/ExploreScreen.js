import React from 'react';
import { View } from 'react-native';

import NavBar from "../Components/NavBar";
import RecipeRow from "../Components/RecipeRow";

const recipeData = {
    "id": "1234",
    "name": "Panquecas de Avena",
    "categoryName": "breakfast",
    "duration": 11,
    "complexity": "Hard",
    "people": 3,
    "recommended": true,
    "favorite": true,
    "ingredients": "2 huevos\r\n6 cucharadas de avena\r\nVainilla\r\n2 cucharadas de azucar\r\nUna pizca de Sal",
    "description": "Te levantas con antojo de panquecas y notas que falta el ingrediente esencial: ¡Harina de trigo! No te alarmes, aún puedes disfrutar de tus panquecas de avena soñadas. Te diremos cómo preparar panqueques sin harina de trigo.",
    "photo": "https://ve.emedemujer.com/wp-content/uploads/sites/2/2015/05/Desayuno-Panquecas-de-avena-con-frutas.jpg"
}

export default class ExploreScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {

        return (
            <View>
                <View>
                    <NavBar text="Explore"
                        rightButton={false}
                        leftButton={false}
                    />
                </View>
                <RecipeRow data={recipeData} />
                <RecipeRow data={recipeData} />
                <RecipeRow />
            </View>
        );
    }
}
