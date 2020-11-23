import React from "react";
import PropTypes from "prop-types";

function Post({ id, title, deletePost }) {
  return (
    <div className="Post">
      <button className="Post-delete" onClick={() => deletePost(id)}>
        x
      </button>
      <div className="Post-title">{title}</div>
      <img
        className="Post-image"
        src={"https://source.unsplash.com/random?sig=" + id}
      />
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Post;
