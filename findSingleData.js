const { client } = require('./index');
const findsingle = async () => {
    try {
        const MyDataBase = client.db('school');
        const MyCollection = MyDataBase.collection('students');
        const query = { Name: 'Mahabub Alom Sujon'};

        const result = await MyCollection.findOne(query);
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
};
findsingle();