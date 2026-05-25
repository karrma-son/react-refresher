import { Link, Form, redirect } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './NewPost.module.css';

function NewPostBackup() {
  return (
    <Modal>
      <Form
        method="post"
        encType="multipart/form-data"
        className={classes.form}
      >
        <p>
          <label htmlFor="blogTitle">Blog Title</label>
          <input
            type="text"
            id="blogTitle"
            name="blogTitle"
            required
          />
        </p>

        <p>
          <label htmlFor="blogSubTitle">Blog Subtitle</label>
          <input
            type="text"
            id="blogSubTitle"
            name="blogSubTitle"
            required
          />
        </p>

        <p>
          <label htmlFor="blogContent">Blog Content</label>
          <textarea
            id="blogContent"
            name="blogContent"
            required
            rows={6}
          />
        </p>

        <p>
          <label htmlFor="blogCoverImage">Cover Image</label>
          <input
            type="file"
            id="blogCoverImage"
            name="blogCoverImage"
            accept="image/*"
            required
          />
        </p>

        <p>
          <label htmlFor="topic">Topic</label>
          <input
            type="text"
            id="topic"
            name="topic"
            required
          />
        </p>

        <p className={classes.actions}>
          <button type="submit">Submit</button>
          <Link to="..">Cancel</Link>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPostBackup;

export async function action({ request }) {
  const formData = await request.formData();

  console.log(formData.get("blogTitle"));
  console.log(formData.get("blogCoverImage"));

  const response = await fetch(
    'http://localhost:8081/v1/blogs/new',
    {
      method: 'POST',
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error('Failed to create blog');
  }

 console.log(data);
  return redirect('/');
}