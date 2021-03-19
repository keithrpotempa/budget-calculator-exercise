import db from '../firebase'

export default {
    getAll() {
        return db.collection("items").get().then((querySnapshot) => {
            const response = []
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                data.id = doc.id
                response.push(data)
            })
            return response;
        })
    },
}
