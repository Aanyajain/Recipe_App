class Meal{
    constructor(id,categoryIds,title,affordability,complexity,imageUrl,duration,ingredients,steps,isGlutenFree,isVegan,isVeg,isLactoseFree)
    {
        this.id=id;
        this.categoryIds=categoryIds;
        this.title=title;
        this.affordability=affordability;
        this.complexity=complexity;
        this.imageUrl=imageUrl;
        this.duration=duration;
        this.steps=steps;
        this.ingredients=ingredients;
        this.isGlutenFree=isGlutenFree;
        this.isLactoseFree=isLactoseFree;
        this.isVeg=isVeg;
        this.isVegan=isVegan;
    } 
}

export default Meal;