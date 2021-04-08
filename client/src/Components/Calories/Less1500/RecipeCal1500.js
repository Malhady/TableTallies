import style from '../../recipe.module.css';

const RecipeCal1500 = ({title,calories,image,ingredients, recipeURL, healthLabels}) => {
    if((calories > 0) && (calories < 1501)){
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

export default RecipeCal1500;