const { client } = require('./index');
const findMultipleData = async () => {
    try {
        const MyDataBase = client.db('school');
        const MyCollection = MyDataBase.collection('students');
        const query = {};
        const cursor = MyCollection.find(query);
        // print a message if no documents were found
    if ((await cursor.EstimatedDocumentCount) === 0) {
        console.log("No documents found!");
        }
    else {
        const MyCollection = await cursor.toArray();
        // replace console.dir with your callback to access individual elements
      await MyCollection.forEach(MyCollection=>console.log(MyCollection));

        }

    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
    
};
findMultipleData();