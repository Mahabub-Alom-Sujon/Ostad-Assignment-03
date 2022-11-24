
const { client } = require('./index');

const insetData = async () => {
    try {
        const MyDataBase = client.db('school');
        const MyCollection = MyDataBase.collection('students');
        const doc = {
            Name: 'Mahabub Alom Sujon',
            Roll: 01,
            Class: 'Nine',
            Group: 'Science',
            City:'Dhaka'
        }
        const result = await MyCollection.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
};
insetData();
