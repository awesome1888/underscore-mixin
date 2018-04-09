# Some useful underscore mixins we use

## Installation

~~~~
npm install underscore-mixin --save
~~~~

## Usage

Just do
~~~~
import 'underscore-mixin';
~~~~
on both server and client, and that`s it. Below this line you will be able to use the functions:

## The Functions

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

Check if `arg` is a plain object (an object with no custom constructor): 
~~~~
_.isPlainObject(arg);
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

Deep clone of `obj`:
~~~~
_.deepClone(obj);
~~~~

Deep equality of `obj1` and `obj2`:
~~~~
_.deepEqual(obj1, obj2);
~~~~

## Build process, just in case if you want one :)

~~~~
npm install;
npm run dev.build; # build a developlment version
# or
npm run build; # build a prodction, minified and uglifyed version
~~~~
