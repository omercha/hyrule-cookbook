export async function getAllRecipes() {
  const response = await fetch('/data/recipes.json');  
  return await response.json();
}
