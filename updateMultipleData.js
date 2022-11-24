const { client } = require('./index');
const updateMultipleData= async () => {
    try {
        const MyDataBase = client.db('school');
        const MyCollection = MyDataBase.collection('students');
        const filter = { };
        const updateDoc = {
            $set: {
                isStudents:true,
            },
        };
        const result = await MyCollection.updateMany(filter, updateDoc);
        console.log(`Updated ${result.modifiedCount} documents`);

    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
};
updateMultipleData();
