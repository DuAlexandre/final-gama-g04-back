//Estrutura -> seeders -> nome deste arquivo substituindo "example"
//Lembrar de seguir sequência númerica para população lógica do banco de dados
//Não adicionar pastas a esta
import * as Sequelize from "sequelize";

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('products', [
            {
                "idProduct": 1,
                "name": "x-tudo",
                "description": "Um lanchão baum demais!",
                "image": "https://img1.gratispng.com/20171220/hdw/hamburger-burger-png-image-5a3a9bd480b453.8972506915137904205272.jpg",
                "price": 32.50,
                "isVegan": false,
                "isGlutenFree":true,
                "category":1,
            },
            {
                "idProduct": 2,
                "name": "x-salada",
                "description": "Um lanchão com muita salada!",
                "image": "https://2.bp.blogspot.com/-RYsrnDN4ui8/Vu3YrGO0SQI/AAAAAAAABkA/a10Szk00yGQ_8YF6AmbF083SAVsd1H31w/s640/dfhgad.png",
                "price": 20.50,
                "isVegan": false,
                "isGlutenFree":true,
                "category":2,
            },
            {
                "idProduct": 3,
                "name": "x-calabresa",
                "description": "Um lanchão com muita calabresa!",
                "image": "https://www.blindburger.com.br/wp-content/uploads/2015/12/xcalabresa.png",
                "price": 22.50,
                "isVegan": false,
                "isGlutenFree":true,
                "category":1,
            },
            {
                "idProduct": 4,
                "name": "x-bacon",
                "description": "Um lanchão com muito bacon!",
                "image": "https://img1.gratispng.com/20180328/izw/kisspng-cheeseburger-bacon-hamburger-wrap-hot-dog-bacon-5abba6a08b2616.56814528152224732857.jpg",
                "price": 25.50,
                "isVegan": false,
                "isGlutenFree":true,
                "category":2,
            },
            {
                "idProduct": 5,
                "name": "x-onion",
                "description": "Um lanchão com muita cebola!",
                "image": "https://storage.googleapis.com/grandchef-apps/gc3896/images/products/6007567642ef7.png",
                "price": 23.50,
                "isVegan": false,
                "isGlutenFree":true,
                "category":1,
            }
        ])
    },

    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('products', {});
    }
}