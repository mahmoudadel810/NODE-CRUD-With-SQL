 const connection = require ('../../DB/Connection')

const adduser = (req, res, next) =>
{
    const { name, email, password , age } = req.body;
    const Query = `insert into tbl_users (name, email , password , age) 
                  VALUES ('${name}', '${email}' ,${password} , ${age})`;
    connection.execute(Query, (err, result) =>
    {
        if (err)
        {
            res.json({ message: "Query error", error: err });
        } else
        {
            //   console.log(result);
            if (result.affectedRows)
            {
                res.json({ message: "Added successfully" });
            } else
            {
                res.json({ message: "Added Fail" });
            }
        }
    });
};
//------------------------------------------------------------

const updateuser = (req, res, next) =>
{
    const { id , name, email, password, age } = req.body;
    const query =`UPDATE tbl_Users SET  id = ${id} , name = '${name}', email = '${email}', password = ${password}, age = ${ age } WHERE id = ${ id };`
    connection.execute(query, (err, result) =>
    {
        if (err)
        {
            res.json({ message: 'Query error', error: err });
        } else
        {
            if (result.affectedRows)
            {
                res.json({ message: 'User updated successfully' });
            } else
            {
                res.json({ message: 'User update failed' });
            }
        }
    });
};

//------------------------------------------------------------

const deleteuser = (req, res, next) =>
{
    const { id } = req.body;
    const Query = `DELETE FROM tbl_Users WHERE id = ${id}`;
    connection.execute(Query, (err, result) =>
    {
        if (err)
        {
            res.json({ message: "Query error", error: err });
        } else
        {
            if (result.affectedRows)
            {
                res.json({ message: "Deleted successfully" });
            } else
            {
                res.json({ message: "Delete failed, user not found" });
            }
        }
    });
};

const searchUsers = (req, res, next) =>
{
    
    const Query = `SELECT * FROM tbl_Users WHERE name LIKE 'a%' AND age < 30` ;
    connection.execute(Query, (err, result) =>
    {
        if (err)
        {
            res.json({ message: "Query error", error: err });
        } else
        {
            res.json({ message: "Search successful", data: result });
        }
    });
};
//------------------------------------------------------

const searchUsersid = (req, res, next) =>
{
    const {ids} = req.body;
    const Query = `SELECT * FROM tbl_Users WHERE id IN (${ids})`;
    connection.execute(Query, (err, result) =>
    {
        if (err)
        {
            res.json({ message: "Query error", error: err });
        } else
        {
            res.json({ message: "Search successful", data: result });
        }
    });
};
//----------------------------------------------------------

const getAllUsers = (req, res, next) =>
{
    const query = `SELECT * FROM tbl_Users`;
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

//--------------------------------------------------------

const getAllUserswithp = (req, res, next) =>
{
    const query = `SELECT name , title ,  tbl_Users.id ,tbl_Products.createdby FROM tbl_Users INNER JOIN tbl_Products ON tbl_Users.id = tbl_Products.createdby`;
    connection.execute(query, (err, result) =>
    {
        if (err)
        {
            res.json({ message: "Query error", error: err });
        } else
        {
            res.json({ message: 'Succsess', data: result });
        }
    });
}









module.exports = {
    adduser,
    updateuser,
    deleteuser,
    searchUsers,
    searchUsersid,
    getAllUsers, 
    getAllUserswithp


    
}