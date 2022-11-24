const { client } = require('./index');
const deleteData = async () => {
    try {
        const MyDataBase = client.db('school');
        const MyCollection = MyDataBase.collection('students');
        const query = { Roll: "01" };
        const result = await MyCollection.deleteOne(query);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
    } catch(error) {
        console.log(error);
    } finally {
        await client.close();
    }
};
deleteData();