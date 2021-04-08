import style from '../../recipe.module.css';

const RecipeCal500 = ({title,calories,image,ingredients, recipeURL, healthLabels}) => {
    if((calories > 2499)){
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories: {Math.round(calories)}</p>
            <a href = {recipeURL}><img src ={image} alt={title.text}/></a>        
        </div>
    );
                }else{
                    return "";
                }
}

export default RecipeCal500;