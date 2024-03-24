import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);
  if (loading) return <div>Recipe is Loading Please Wait....</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map(( item) => <RecipeItem  item={item} />)
      ) : (
        <div>
          <p className="text-center lg:text-4xl text-xl text-cyan-400 font-extrabold">
            Nothing to Show. Please Search Somthing
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
