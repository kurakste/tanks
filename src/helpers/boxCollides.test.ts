import boxCollides from './boxCollides';

test('test box collides function, must be false', ()=> {
  const res = boxCollides([10,10], 10, [100,100], 10);
  expect(res).toBe(false);
});

test('test box collides function , must be false', ()=> {
  const res = boxCollides([0,0], 100, [101,101], 10);
  expect(res).toBe(false);
});

test('test box collides function', ()=> {
  const res = boxCollides([10,10], 101, [100,100], 10);
  expect(res).toBe(true);
});
