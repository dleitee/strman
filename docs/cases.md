# String Cases

```es6
import {toLowerCase} from 'strman'
```

## toLowerCase([String])

Transform to lowercase.

#### Usage
```es6
import {toLowerCase} from 'strman'

let title = "TRANSFORM TO lowercase";
let result = toLowerCase(title);
// result => "transform to lowercase."
```

## toUpperCase([String])

Transform to uppercase.

#### Usage
```es6
import {toUpperCase} from 'strman'

let title = "TRANSFORM TO uppercase";
let result = toUpperCase(title);
// result => "TRANSFORM TO UPPERCASE"
```

## isLowerCase([value], [n])

Verify if is lowerCase

#### Usage
```es6
import {hasLowerCase} from 'strman'

let value = "daniel";
let result = hasLowerCase(value);
// result => true;
```

## isUpperCase([value], [n])

Verify if is upperCase

#### Usage
```es6
import {hasUpperCase} from 'strman'

let value = "DANIEL";
let result = hasUpperCase(value);
// result => true;
```
