import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { remove, add } from "../redux/Slices/CartSlice"; // استيراد أكشنات الـ Redux
import { products } from "../data";
import { useEffect, useRef } from "react";
import AOS from "aos"; // استيراد AOS
import "aos/dist/aos.css"; // استيراد الأنماط الخاصة بـ AOS

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart); // استرجاع حالة الـ cart من الـ Redux
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post)); // إضافة المنتج إلى السلة
    toast.success("Piece added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id)); // إزالة المنتج من السلة باستخدام الـ id
    toast.error("Piece removed from Cart");
  };

  // التحقق إذا كان المنتج في السلة أم لا
  const isInCart = cart.some((p) => p.id === post.id);

  const scrollContainer = useRef(null); // إنشاء مرجع للمحتوى الذي سيتحكم فيه التمرير السلس

  useEffect(() => {
    // تهيئة AOS
    AOS.init({
      duration: 1000, // مدة التأثير بالمللي ثانية
      easing: "ease-in-out", // نوع التخفيف
      once: false, // التأثير يحدث مرة واحدة فقط
    });

    // تهيئة Locomotive Scroll

    // تنظيف عند
  }, []);

  return (
    <div className="pcard" ref={scrollContainer} data-scroll-container>
      {" "}
      {/* تفعيل التمرير السلس في هذه المنطقة */}
      <div>
        <p className="pparent" data-aos="fade-right" data-scroll>
          {post.title}
        </p>
      </div>
      <div>
        <p className="pparent2" data-aos="fade-left" data-scroll>
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[170px]" data-aos="zoom-in" data-scroll>
        <img src={post.image} alt={post.title} className="h-full w-full imgp" />
      </div>
      <div className="flex justify-center gap-12 items-center w-full mt-5 btpric">
        <div>
          <p className="price">${post.price}</p>
        </div>

        {/* التحقق إذا كان المنتج في السلة لعرض الزر المناسب */}
        {isInCart ? (
          <button className="btnr" onClick={removeFromCart}>
            Remove Piece
          </button>
        ) : (
          <button className="btn" onClick={addToCart}>
            Add Piece
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
