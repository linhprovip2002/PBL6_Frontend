import Rating from "@mui/material/Rating";
import { authSelector } from "@redux/reducers";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Review = ({ review, handleChange, submitComment }) => {
  const [reviews, setReviews] = useState(review || []);
  const [key, setKey] = useState(0);

  const { user } = useSelector(authSelector);

  useEffect(() => {
    setReviews(review);
    setKey((prevKey) => prevKey + 1); // Increment the key to force re-render
  }, [review]);

  // const deleteReview = async (id) => {
  //   try {
  //     await ProductApi.deleteReview(id);
  //     toastSuccess("Bạn đã xóa thành công");
  //   } catch (error) {
  //     toastError("Có gì đó sai, hãy thử lại");
  //   }
  // };

  return (
    <div className="mt-[50px]">
      <div className="text-lg">Bình luận khách hàng</div>
      <div className="flex mt-3">
        <Rating
          key={key}
          value={
            reviews.length !== 0
              ? Math.round(
                  reviews.reduce(
                    (acc, review) => acc + parseInt(review.rating),
                    0
                  ) / reviews.length
                )
              : 0
          }
          readOnly
        />
        <p className="text-xs p-2 ml-2">Từ {reviews.length} đánh giá</p>
      </div>

      <div className="w-full mt-3">
        <div className="w-full h-[100px] rounded-2xl border bg-white flex">
          <textarea
            className="mx-2 py-2 px-2 rounded-2xl"
            style={{ width: "85%" }}
            onChange={(event) => handleChange("comment", event.target.value)}
          />

          <div className="absolute right-[250px] mt-[70px]">
            <Rating
              onChange={(event, newValue) => {
                handleChange("rating", newValue);
              }}
            />
          </div>

          <div className="flex items-center ">
            <button
              type="button"
              className="bg-black hover:bg-gray-700 text-white font-bold px-4 py-2 mx-4 rounded-3xl"
              onClick={() => submitComment()}
            >
              Bình luận
            </button>
          </div>
        </div>
      </div>

      <p className="text-xl font-semibold my-3 mx-3">
        {reviews.length} bình luận
      </p>

      {reviews.map((reviewed) => (
        <>
          <div className="flex mt-5">
            <div style={{ width: "10%" }} className="flex justify-center">
              <img
                src={
                  reviewed.IDcustomer.profilePicture
                    ? reviewed.IDcustomer.profilePicture
                    : "/assets/images/avatar-default-circle.png"
                }
                style={{
                  objectFit: "cover",
                  width: "60px",
                  height: "60px",
                }}
                alt="ava"
                className="rounded-full flex-shrink-0"
              />
            </div>
            <div style={{ width: "90%" }}>
              <div
                style={{
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "26px",
                }}
              >
                {reviewed.IDcustomer.firstName} {reviewed.IDcustomer.lastName}
              </div>
              <div className="mt-3">
                <Rating value={reviewed.rating} readOnly size="small" />
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "26px",
                  marginTop: "5px",
                }}
              >
                {reviewed.comment}
              </div>
              <div className="text-xs mt-2 flex">
                <p>{reviewed.updatedAt.substring(0, 10)}</p>
                <button className="text-xs ml-5 hover:text-blue-400 hover:font-semibold">Thích </button>
                <button className="text-xs ml-5 hover:text-gray-400 hover:font-semibold">Phản hồi</button>
                {user?._id === reviewed.IDcustomer._id ? (
                  <>
                    <button
                      className="text-xs ml-5 hover:text-red-500"
                      // onClick={() => deleteReview(reviewed._id)}
                    >
                      Xóa
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Review;
