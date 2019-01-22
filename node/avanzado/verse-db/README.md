# verse-db

## usage

``` js
const setupDatabase = require('verse-db')

setupDatabase(config)
  .then(db => {
    const { Agent, Metric } = db
  })
  .catch(err => console.error(err))

```