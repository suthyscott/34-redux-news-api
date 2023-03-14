import { configureStore } from "@reduxjs/toolkit";
import potentialArticlesSlice from "./potentialArticlesSlice";
import displayArticleSlice from "./displayArticleSlice";

export default configureStore({
    reducer: {
        potentialArticles: potentialArticlesSlice,
        displayArticle: displayArticleSlice
    }
})