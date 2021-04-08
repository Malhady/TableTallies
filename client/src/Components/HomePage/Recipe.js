import style from '../recipe.module.css';

const Recipe = ({title,calories,image,ingredients, recipeURL}) => {
    return(
        <div className={style.recipe}>
        <a target= "_blank" href = {recipeURL}><h1>{title}</h1></a>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {Math.round(calories)}</p>
            <a target = "_blank" href = {recipeURL}><img src ={image} alt={title.text}/></a>        
        </div>
    );
}

export default Recipe;