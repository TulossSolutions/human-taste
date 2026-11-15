import React, { useState } from 'react';
import { filterProducts } from './data.js';
import ProductDialog from './components/ProductDialog.jsx';

export default function App() {
  const [category, setCategory] = useState('all');
  const [selected, setSelected] = useState(null);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Serein home">SEREIN</a>
        <nav aria-label="Main">
          <a href="#collection">Collection</a>
          <a href="#studio">Studio</a>
          <a href="/care.html">Care</a>
        </nav>
      </header>

      <main>
        <div className="opening">
          <h1>Ceramic objects <span>for everyday spaces</span></h1>
          <p>Serein is a fictional ceramics studio. This site is an illustrative demo.</p>
        </div>

        <section id="collection" aria-labelledby="collection-title">
          <div className="collection-heading">
            <h2 id="collection-title">Collection</h2>
            <div className="collection-filters" role="group" aria-label="Filter collection">
              {['all', 'vessels', 'lighting'].map(value => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={category === value}
                  onClick={() => setCategory(value)}
                >
                  {value === 'all' ? 'All objects' : value[0].toUpperCase() + value.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="products">
            {filterProducts(category).map((product, index) => (
              <article className="product" key={product.id}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={`Illustration of the fictional ${product.name.toLowerCase()}`}
                  width="720"
                  height="840"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="product-caption">
                  <h3>{product.name}</h3>
                  <p className="product-details">{product.material} / {product.dimensions}</p>
                  <p className="product-description">{product.description}</p>
                  <button className="inquiry-button" type="button" onClick={() => setSelected(product)}>
                    Ask about {product.name}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="studio" className="studio" aria-labelledby="studio-title">
          <h2 id="studio-title">Objects, considered slowly.</h2>
          <p>A fictional study in material, proportion, and the spaces around objects.</p>
        </section>
      </main>

      <footer className="site-footer">Illustrative demo — no products are offered for sale.</footer>
      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
