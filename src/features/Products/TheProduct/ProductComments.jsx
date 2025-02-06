import { useDispatch, useSelector } from "react-redux";
import ProductComment from "./ProductComment";
import toPersianNumber from "../../../services/toPersianNumber";
import { ArrowLeft } from "../../../Ui/SVGs/Svg";
import { useEffect, useState } from "react";
import { fetchComment, setDataOther } from "./commentSlice";
import { useParams } from "react-router-dom";

function ProductComments() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.theProductReducer);
  const {id} = useParams();
  const {
    isLoading,
    error,
    data: commentData,
  } = useSelector((store) => store.commentReducer);

  useEffect(function(){
    setPage(1);
    dispatch(setDataOther());
  },[id , dispatch])

  function showNextPageData(){
    dispatch(fetchComment(id , page));
    setPage(page => page +1)
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">کامنت ها</h2>
      <div className="flex flex-col">
        {data.last_comments.map((comment) => (
          <ProductComment key={comment.id} comment={comment} />
        ))}
      </div>
      {error !== "" && (
        <div className="flex h-10 w-full items-center justify-center">
          <span>{error}</span>
        </div>
      )}
      {isLoading === true && (
        <>
          <div className="flex flex-col">
            {commentData.map((comment) => (
              <ProductComment key={comment.id} comment={comment} />
            ))}
          </div>
          <div className="flex h-10 w-full items-center justify-center">
            <span className="loader"></span>
          </div>
        </>
      )}
      {isLoading === false && error === "" && data.length !== 0 && (
        <div className="flex flex-col">
          {commentData.map((comment) => (
            <ProductComment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
      {isLoading === false &&
        error === "" &&
        +data.comments_count - (+data.last_comments.length + commentData.length) > 0 && (
          <div onClick={showNextPageData} className="flex cursor-pointer items-center gap-1 py-3 text-sm font-bold text-[var(--color-blue1)]">
            نمایش
            <span>
              {" "}
              {toPersianNumber(
                +data.comments_count - +data.last_comments.length - commentData.length,
              )}{" "}
            </span>
            کامنت دیگر
            <ArrowLeft width={10} height={10} />
          </div>
        )}
    </div>
  );
}

export default ProductComments;
