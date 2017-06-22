# pg-dollar-quote

Dollar quote literals for use in PostgreSQL SQL commands.

# Installation

Add it to your node.js project via:

    npm install pg-dollar-quote --save

# Usage

    const dollarQuote = require('pg-dollar-quote');

    // $$my user input$$
    console.log(dollarQuote('my user input'));

# License

ISC. See the file [LICENSE](LICENSE).
