const connection = require('../../DB/Connection');


const addProduct = (req, res, next) =>
{
    const { title, description, price, createdby } = req.body;
    const query = `INSERT INTO tbl_Products (title, description, price, createdBy) VALUES ('${title}', '${description}', ${price}, ${createdby})`;
    connection.execute(query, (err, result) =>
    {
        if (err)
        {
            res.json({ message: "Query error", error: err });
        } else
        {
            res.json({ message: "Product added successfully", data: result });
        }
    });
};
//----------------------------------------------------------------------

const deleteProduct = (req, res, next) =>
{
    const { id, user } = req.body;
    // assuming that the user is sending the user who is owner of the product and id of the product
    const query = `DELETE FROM tbl_Products WHERE id = ${id} and createdby = '${user}'`;
    connection.execute(query, (err, result) =>
    {
        if (err)
        {
            res.json({ message: "Query error", error: err });
        } else
        {
            if (result.affectedRows)
            {
                res.json({ message: "Product deleted successfully" });
            } else
            {
                res.json({ message: " product not found or you are not the owner of the product" });
            }
        }
    });
};

//-------------------------------------------------------------------

const updateProduct = (req, res, next) =>
{
    const { id, title, description, price, user } = req.body;
    // assuming that the user is sending the user who is owner of the product, id of the product and the fields to update
    const query = `UPDATE tbl_Products SET title = '${title}', description = '${description}', price = ${price} WHERE id = ${id} and createdby = ${user}`;
    connection.execute(query, (err, result) =>
    {
        if (err)
        {
            res.json({ message: "Query error", error: err });
        } else
        {
            if (result.affectedRows)
            {
                res.json({ message: "Product updated successfully" });
            } else
            {
                res.json({ message: "Update failed, product not found or you are not the owner of the product" });
            }
        }
    });
};

//-----------------------------------------------------------------------
const getAllProducts = (req, res, next) =>
{
    const query = `SELECT * FROM tbl_Products`;
    connection.execute(query, (err, result) =>
    {
        if (err)
        {
            res.json({ message: "Query error", error: err });
        } else
        {
            res.json({ message: "successfully", data: result });
        }
    });
};
//-------------------------------------------------------------

const greater3000 = (req, res, next) =>
{
    const query = `SELECT * FROM tbl_Products WHERE price > 3000`;
    connection.execute(query, (err, result) =>
    {
        if (err)
        {
            res.json({ message: "Query error", error: err });
        } else
        {
            res.json({ message: "successfully", data: result });
        }
    });
};



module.exports = { addProduct, deleteProduct, updateProduct, getAllProducts, greater3000 };