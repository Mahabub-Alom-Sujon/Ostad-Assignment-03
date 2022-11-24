const { client } = require('./index');
const updateData = async () => {
    try {
        const MyDataBase = client.db('school');
        const MyCollection = MyDataBase.collection('students');
        const filter = { Roll: "01" };
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                Country: 'Bangladesh',
            },
        };
        const result = await MyCollection.updateOne(filter, updateDoc, options);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
};
updateData();