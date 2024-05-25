import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Service from "../Appwrite/service";
import PostForm from "../components/PostForm";

export default function EditPost() {
  const [post, setPost] = useState(null);
  const slug = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      Service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else navigate("/");
  }, [slug, navigate]);

  return post ? (
    <>
      <div>
        <PostForm post={post} />
      </div>
    </>
  ) : null;
}
