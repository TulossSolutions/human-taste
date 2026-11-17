import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProducts, products } from '../src/data.js';
test('catalog retains its three stable product identifiers', () => assert.deepEqual(products.map(product => product.id), ['drift','tide','arc']));
test('category filtering preserves expected products', () => { assert.equal(filterProducts('all').length, 3); assert.deepEqual(filterProducts('vessels').map(product => product.id), ['drift','tide']); assert.deepEqual(filterProducts('lighting').map(product => product.id), ['arc']); assert.deepEqual(filterProducts('unknown'), []); });
