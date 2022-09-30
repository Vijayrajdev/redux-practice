import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (canSave) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    } else {
      window.alert("Oops try entering a title and Content !!");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const usersOption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Post Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOption}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
