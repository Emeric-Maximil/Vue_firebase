import firebase from '../firebase';
// ICI c'est une REF à l'endroit de notre """TABLE""" articles dans la BDD
const db = firebase.ref("/articles");

class ArticleDataService {
    getAll(){
        return db;
    }

    create(article){
        return db.push(article);
    }

    update(key, value){
        return db.child(key).update(value);
    }

    delete(key){
        return db.child(key).remove();
    }

    deleteAll(){
        return db.remove();
    }
}

export default new ArticleDataService();