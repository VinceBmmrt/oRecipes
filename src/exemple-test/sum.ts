/* eslint-disable import/prefer-default-export */

export function sum(a: number | string, b: number | string) {
  const aValue = Number(a);
  const bValue = Number(b);

  if (Number.isNaN(aValue) || Number.isNaN(bValue)) {
    throw new Error('One of the arguments is not a number');
  }

  return aValue + bValue;
}
