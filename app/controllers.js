const articles = require('../data/articles.json');

const controller = {
    home: (req, res) => {  
        // we do a 30 word summary
        for (let index = 0; index < articles.length; index++) {
          const text = articles[index].text;
          let words = text.split(' ');
          words = words.slice(0, 30);
          const excerpt = words.join(' ');
          articles[index].excerpt = excerpt;
        }
        res.render('index', {
          articles: articles,
        });
      },

    article: (req, res) => {
        // transform the id to a number
        const articleId = parseInt(req.params.id);
        // return the first article equal to the id(with find)
        const foundedArticle = articles.find((testedArticle) => {
            return testedArticle.id === articleId
        })
        if (foundedArticle) {
            res.render('article', {
                article: foundedArticle,
            })
        }
    },

    category: (req, res) => {
        const articleCategory = req.params.category;
        // return all the articles with the same category(with filter)
        const filteredArticles = articles.filter((testedArticle) => {
            return testedArticle.category === articleCategory; 
          });
            res.render('category', {
                articles: filteredArticles
            })
        } 
    }
    



module.exports = controller;