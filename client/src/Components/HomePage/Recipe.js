import style from '../recipe.module.css';

const Recipe = ({title,calories,image,ingredients, recipeURL}) => {
    return(
        <div className={style.recipe}>
        <a target = "_blank" href = {recipeURL}><img src ={image} alt={title.text}/></a>        
        <a target= "_blank" href = {recipeURL}><h1>{title}</h1></a>
        <p>Calories: {Math.round(calories)}</p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;