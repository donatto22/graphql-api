// db
import db from './_db.js'

export const resolvers = {
    Query: {
        games() { return db.games },
        game(_, args) { return db.games.find((game) => game.id == args.id) },

        authors() { return db.authors },
        author(_, args) { return db.authors.find((author) => author.id == args.id) },

        reviews() { return db.reviews },
        review(_, args) { return db.reviews.find((review) => review.id == args.id) }
    },

    Game: {
        reviews(parent) {
            // se obtienen las reseñas por cada juego
            // el juegoo tiene reseñas, y estas se obtienen mediante
            // el mismo id que comparten
            return db.reviews.filter((r) => r.game_id === parent.id)
        }
    },

    Author: {
        reviews(parent) {
            // de las reseñas, se obtienen las que tengan el mismo id que el autor
            return db.reviews.filter((r) => r.author_id === parent.id)
        }
    },

    Review: {
        author(parent) {
            // encontral el autor de dicha reseña
            return db.authors.find((a) => a.id == parent.author_id)
        },

        game(parent) {
            // el juego de dicha reseña
            return db.games.find((a) => a.id == parent.game_id)
        }
    },

    Mutation: {
        // parent, args
        deleteGame(_, args) {
            db.games = db.games.filter((g) => g.id != args.id)
            return db.games
        },

        addGame(_, args) {
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 100).toString()
            }

            db.games.push(game)
            return game
        },

        updateGame(_, args) {
            db.games = db.games.map((game) => {
                if(game.id == args.id) return {
                    ...game, ...args.edits
                }

                return game
            })

            return db.games.find((g) => g.id == args.id)
        }
    }
}