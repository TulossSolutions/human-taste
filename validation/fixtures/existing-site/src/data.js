export const products = [
  { id: 'drift', name: 'Drift vessel', category: 'vessels', material: 'Matte stoneware', dimensions: '24 × 16 cm', color: 'Chalk', description: 'A broad-shouldered vessel with a narrow opening and an unglazed foot.', image: '/drift.svg' },
  { id: 'tide', name: 'Tide bowl', category: 'vessels', material: 'Glazed stoneware', dimensions: '9 × 28 cm', color: 'Deep blue', description: 'An open bowl with a low curved wall and a deep blue interior.', image: '/tide.svg' },
  { id: 'arc', name: 'Arc lamp', category: 'lighting', material: 'Ceramic body', dimensions: '38 × 22 cm', color: 'Sand', description: 'A sculptural lamp study with a rounded ceramic body and an arched shade.', image: '/arc.svg' }
];
export function filterProducts(category) { return category === 'all' ? products : products.filter(product => product.category === category); }
