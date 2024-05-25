/* eslint-disable no-unused-vars */
import { useCallback, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserContext from "./../context/UserContext";
import Service from "../Appwrite/service";
import { Input } from "postcss";
import RTE from "./RTE";
import Select from "./Select";
import Button from "./Button";

const PostForm = ({ post }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.title || "",
        slug: post?.title || "",
        status: post?.title || "",
      },
    });
  const { state } = useContext(UserContext);
  const userData = state.userData;

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? Service.uploadFile(data.image[0]) : null;
      if (file) Service.deleteFile(post.featuredImage);

      const dbpost = await Service.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbpost) {
        navigate(`/post/${dbpost.$id}`);
      }
    } else {
      const file = data.image[0] ? Service.uploadFile(data.image[0]) : null;
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbpost = await Service.createPost({
          ...data,
          userId: userData.id,
        });
        if (dbpost) navigate(`/post/${dbpost.$id}`);
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title")
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);
  return (
    <form>
      <div>
        <Input
          label="Title"
          placeholder="Title"
          {...register("title", {
            required: true,
          })}
        />
        <Input
          label="Slug:"
          placeholder="Slug"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="content"
          name={"content"}
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div>
        <Input
          label={"Image"}
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div>
            <img src={Service.getFile(post.featuredImage)} alt="post.title" />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="status"
          {...register("status", { required: true })}
        />
        <Button
          type={"submit"}
          bgColor={post ? "bg-green-500" : undefined}
          className={"w-full"}
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
