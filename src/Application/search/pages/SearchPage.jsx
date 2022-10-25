import { useProductsStore } from "../../../hooks";
import { CardProduct } from "../../home";
import { Footer } from "../../ui";

export const SearchPage = () => {
  const { products } = useProductsStore();

  console.log(products);

  return (
    <div className="container_SearchPage">
      {products.length === 0 || !products ? (
        <div className="container_cards">
          <h3>No se ha encontrado ningún producto</h3>
        </div>
      ) : (
        <div className="container_cards">
          {products.map((e, i) => (
            <div className="container_SearchCard" key={i}>
              <CardProduct product={e} />
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};
