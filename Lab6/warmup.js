const original = { name: 'Knox', km: 2.8 };
const alias = original;
const copy = { ...original };
alias.km = 99; // Prediction: original.km is 99 because alias and original share the same object
copy.km = 1; // Prediction: original.km stays 99 because copy is a different object
const outer = { name: 'X', meta: { tags: ['steep'] } };
const shallow = { ...outer };
shallow.meta.tags.push('rocky'); // outer.meta.tags is just rocky
({ x: 1 } === { x: 1 })//false