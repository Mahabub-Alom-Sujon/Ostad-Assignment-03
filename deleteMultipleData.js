const { client } = require('./index');
const deleteMultipleData = async () => {
    try {
        const MyDataBase = client.db('school');
        const MyCollection = MyDataBase.collection('students');
        const query = { };
        const result = await MyCollection.deleteMany(query);
        console.log("Deleted " + result.deletedCount + " documents");
    } catch(error) {
        console.log(error);
    } finally {
        await client.close();
    }
};
deleteMultipleData();