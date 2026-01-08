import type { ProductType } from "../types/product-type";

export default function ProductList({
  heading,
  products,
  styles,
}: ProductType) {
  return (
    <section>
      <h2 className="">{heading}</h2>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            {product.badge && (
              <span className={styles.badge}>{product.badge}</span>
            )}

            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />

            <h3 className={styles.title}>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
