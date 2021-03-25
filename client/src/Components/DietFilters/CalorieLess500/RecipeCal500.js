import style from '../../recipe.module.css';

const RecipeCal500 = ({title,calories,image,ingredients, recipeURL, healthLabels}) => {
    if((calories > 0) && (calories < 501)){
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <a href = {recipeURL}><img src ={image} alt={title.text}/></a>        
        </div>
    );
                }else{
                    return "";
                }
}

export default RecipeCal500;