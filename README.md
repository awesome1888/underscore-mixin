# Some useful underscore mixins we use

Check if `arg` is a non-empty string: 
~~~~
_.isStringNotEmpty(arg);
~~~~

Check if `arg` is a non-empty string after being trimmed: 
~~~~
_.isStringNotEmptyTrimmed(arg);
~~~~

Check if `arg` is a non-empty array: 
~~~~
_.isArrayNotEmpty(arg);
~~~~

Check if `arg` is a non-empty object: 
~~~~
_.isObjectNotEmpty(arg);
~~~~

Extract value of deeply nested property of `obj`: 
~~~~
_.getValue(obj, 'some.inner[0].property');
~~~~

Capitalize the first letter of `arg`:
~~~~
_.uCFirst(arg);
~~~~

De-capitalize the first letter of `arg`:
~~~~
_.lCFirst(arg);
~~~~

Produce key intersection of two objects:
~~~~
_.intersectKeys(obj1, obj2);
~~~~
