import React from "react"


const Post = ({article}) => {
    console.log(article);
    const { name, featuredImage, description} = article.fields;
    return(
        <div className="post">
            <h2 className="title">{name}</h2>
            <img src={featuredImage.fields.file.url} alt="img" />
            <p className="description">{description}</p>
        </div>
    )
}
export default Post;