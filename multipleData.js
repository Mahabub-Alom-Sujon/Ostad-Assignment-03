const { client } = require('./index');
const multipleData = async () => {
    try {
        const MyDataBase = client.db('school');
        const MyCollection = MyDataBase.collection('students');
        const doc = [
            {
                Name: 'Mahabub Alom',
                Roll: 02,
                Class: 'Ten',
                Group: 'Science',
                City:'Chittagong'
            },
            {
                Name: 'Rikeb Islam',
                Roll: 03,
                Class: 'Nine',
                Group: 'Science',
                City:'Comilla'
            },
            {
                Name: 'sakib ',
                Roll: 04,
                Class: 'six',
                Group: 'Science',
                City:'Rongpur'
            },
            {
                Name: 'Rifat',
                Roll: 05,
                Class: 'six',
                Group: 'Science',
                City:'Barisal'
            },
            {
                Name: 'Rony Islam',
                Roll: 06,
                Class: 'six',
                Group: 'Science',
                City:'Mymensinghl'
            }

        ]
        const result = await MyCollection.insertMany(doc);
        
        console.log(`${result.insertedCount} documents were inserted`);
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
};
multipleData();