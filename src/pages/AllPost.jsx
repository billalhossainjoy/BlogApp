import { Editor } from "@tinymce/tinymce-react";
import RTE from "../components/RTE";
import { plugin } from "postcss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
const tynemce = import.meta.env.VITE_TYNEMCE_API_KEY;

const AllPost = () => {
  const { control,register,watch } = useForm();
  
  return (
    <>
      <div>{watch('content')}</div>
      <RTE name={'content'} control={control} {...register('content')} />
    </>
  );
};

export default AllPost;
