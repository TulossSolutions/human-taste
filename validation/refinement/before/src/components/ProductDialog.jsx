import React, { useEffect, useRef, useState } from 'react';
export default function ProductDialog({ product, onClose }) {
  const dialog = useRef(null);
  const [prepared, setPrepared] = useState(false);
  useEffect(() => { if (product) { setPrepared(false); dialog.current.showModal(); } }, [product]);
  return <dialog ref={dialog} onClose={onClose} aria-labelledby="inquiry-title">
    {product && <><button type="button" onClick={() => dialog.current.close()} aria-label="Close inquiry">Close</button>
    <h2 id="inquiry-title">Ask about {product.name}</h2><p>Illustrative demo. No inquiry is transmitted.</p>
    <form onSubmit={event => { event.preventDefault(); setPrepared(true); }}>
      <label>Your email<input type="email" name="email" required /></label>
      <label>Your question<textarea name="question" defaultValue={`I'd like to know more about the ${product.name.toLowerCase()}.`} /></label>
      <button type="submit">Prepare inquiry</button>
    </form>{prepared && <p role="status">Demo inquiry prepared — no message sent.</p>}</>}
  </dialog>;
}
