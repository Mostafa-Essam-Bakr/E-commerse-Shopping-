import { useState, useEffect, useRef } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'
import { products } from '../data' // استيراد البيانات من ملف data.js
import './loca.css' // تأكد من أن ملف CSS يحتوي على التمرير السلس عبر CSS فقط

const Home = () => {
  const [loading, setLoading] = useState(true) // تعيين الحالة كـ true بشكل افتراضي
  const [posts, setPosts] = useState([])
  const gridRef = useRef(null) // استخدام useRef لتحديد عنصر التمرير

  // محاكاة تأخير في التحميل
  useEffect(() => {
    setTimeout(() => {
      setPosts(products) // تعيين البيانات إلى الحالة
      setLoading(false) // إيقاف التحميل بعد تأخير
    }, 1000) // تأخير لمدة 1 ثانية
  }, [])

  // وظيفة التمرير السلس إلى عنصر الشبكة عند تحميل البيانات
  useEffect(() => {
    if (!loading && gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [loading])

  return (
    <div className="parent">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div ref={gridRef} className="grid-container">
          {posts.map(post => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No data found</p>
        </div>
      )}
    </div>
  )
}

export default Home
