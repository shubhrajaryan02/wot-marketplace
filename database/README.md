## Database configuration

We use MongoDB as the database engine. To be installed [here](https://docs.mongodb.com/manual/administration/install-community/)

Then run it with `mongod --dbpath wot-marketplace/database/data`

This will initiate the database under data and create a 300 Mb journal file.

You can run populate.js to populate it with 100 random entries.
