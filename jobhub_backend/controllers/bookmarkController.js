const Bookmark = require('../models/Bookmark')

module.exports = {
    createBookmark: async (req, res) => {
        const newBookmark = new Bookmark(req.body);

        try{
            const savedBookmark = await newBookmark.save();
            res.status(201).json(savedBookmark);
        }catch(error){
            res.status(500).json('Not able to create Bookmark')
        }

    },

    deleteBookmark: async (req, res) => {
        try{
        await Bookmark.findByIdAndDelete(req.params.id);
            res.status(201).json('Bookmark deleted successfully');
        }catch(error){
            res.status(500).json('Not able to delete Bookmark')
        }

    },

    getBookmarks: async (req, res) => {
        try{
        const bookmarks = await Bookmark.findById({userId : req.params.userId});
            res.status(201).json(bookmarks);
        }catch(error){
            res.status(500).json('Not able to fetch Bookmarks')
        }

    },


}