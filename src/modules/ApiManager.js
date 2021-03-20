import firebase from "gatsby-plugin-firebase"

const ApiManager = {
    getAll() {
        return firebase.firestore().collection("items").get().then((querySnapshot) => {
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

export default ApiManager