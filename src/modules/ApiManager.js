import db from '../firebase'

export default {
    getAll() {
        return db.collection("items").get().then((querySnapshot) => {
            const response = []
            querySnapshot.forEach((doc) => {
                response.push(doc.data())
            })
            return response;
        })
    },
}
