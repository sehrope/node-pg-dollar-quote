# pg-dollar-quote

Dollar quote literals for use in PostgreSQL SQL commands.

[![NPM](https://nodei.co/npm/pg-dollar-quote.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/pg-dollar-quote/)

[![Build Status](https://travis-ci.org/sehrope/node-pg-dollar-quote.svg?branch=master)](https://travis-ci.org/sehrope/node-pg-dollar-quote)

# Installation

Add it to your node.js project via:

    npm install pg-dollar-quote --save

# Usage

    const dollarQuote = require('pg-dollar-quote');

    // $$my user input$$
    console.log(dollarQuote('my user input'));

# License

ISC. See the file [LICENSE](LICENSE).
