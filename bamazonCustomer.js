var mysql = require("mysql");
var inquirer = require("inquirer");
var Tablefy = require("tablefy");

// create connection to SQL database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_DB"
});

// // connect to the mysql server and sql database
// connection.connect(function (err) {
//     if (err) throw err;
//     // run the start function after the connection is made to prompt the user
// });


let table = new Tablefy()

function showTable() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        table.draw(res);
        placeOrder();
    });
}

function placeOrder() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // once you have the items, prompt the user for which they'd like to bid on
        inquirer.prompt([
            {
                name: "id",
                type: "input",
                message: "What is the ID of the product you'd like to buy?"
            },
            {
                name: "units",
                type: "input",
                message: "How many would you like?"
            }
        ]).then(function (input) {
            // get the information of the chosen item
            var productID = input.id;
            var quantity = input.units;

            connection.query("SELECT * FROM products WHERE ?", { id: productID }, function (err, results) {
                if (err) throw err;
                
                var productData = results[0];

                // determine if bid was high enough
                if (quantity <= productData.stock_quantity) {
                    console.log("It's in stock!")

                    var updateQueryString = "UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + " WHERE id = " + productID;
                    connection.query(updateQueryString, function (err, results) {
                        if (err) throw err;
                        console.log('Your order has been placed! Your total is $' + productData.price * quantity);
                        connection.end();
                    });


                } else {
                    // bid wasn't high enough, so apologize and start over
                    console.log("Sorry, there is not enough in stock! Please try a lesser quantity or product.");
                    showTable();
                };
            });
        })
    });
};

function runBamazon() {
    showTable();
};

runBamazon();