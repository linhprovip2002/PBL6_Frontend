import { Rating } from "@material-tailwind/react/components/Rating/index";
import { useEffect, useState } from "react";

const Review = ({ productDetailsCurrent }) => {
  useEffect(() => {
    console.log(productDetailsCurrent);
  }, []);

  const [review] = useState(productDetailsCurrent.review);

  return (
    <div className="mt-[50px]">
      <div className="text-lg">Bình luận khách hàng</div>
      {review.reviews?.map((reviewed) => (
        <>
          <div className="flex mt-3">
            <Rating value={review.average_rating} readonly />
            <p className="text-xs p-2 ml-2">{review.reviews.length} bình luận</p>
          </div>

          <div className="w-full mt-3">
            <div className="w-full h-[100px] rounded-lg border bg-white flex">
              <textarea className="mx-4 py-5 px-2" style={{ width: "85%" }} />
              <div className="flex items-center ">
                <button
                  type="button"
                  className="bg-black hover:bg-gray-700 text-white font-bold px-4 py-2 mx-4 rounded-lg"
                >
                  Bình luận
                </button>
              </div>
            </div>
          </div>

          <div className="flex mt-5">
            <div style={{ width: "10%" }} className="flex justify-center">
              <img
                src="/assets/images/slide1.jpg"
                style={{
                  objectFit: "cover",
                  width: "70px",
                  height: "70px",
                }}
                alt="ava"
                className="rounded-full flex-shrink-0"
              />
            </div>
            <div style={{ width: "85%" }}>
              <div className="text-lg font-bold">{reviewed.IDcustomer}</div>
              <div className="text-md">{reviewed.comment}</div>
              <div className="text-md">
                {reviewed.updatedAt.substring(0, 10)}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <button
              type="button"
              className="bg-white hover:bg-gray-300 px-4 py-2 border border-black"
            >
              Tải Thêm
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Review;
