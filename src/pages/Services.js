import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import pic21 from '../Assets/21.png'
import pic22 from '../Assets/22.png'
import pic23 from '../Assets/23.png'
import pic24 from '../Assets/24.png'
import pic25 from '../Assets/25.png'
import Squre from './blog'

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function Serv() {
  const parallax = useRef(null)

  // CSS لتخصيص شريط التمرير
  const customScrollbarStyles = {
    /* تخصيص الشريط الأساسي */
    scrollbarWidth: '12px',
    scrollbarHeight: '12px',
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#253237',
        overflow: 'auto', // للتأكد من أن التمرير يعمل
      }}>
      {/* تخصيص شريط التمرير باستخدام CSS في داخل الـ JSX */}
      <style>
        {`
          /* تخصيص شريط التمرير في المتصفحات التي تدعم WebKit (مثل Chrome و Safari) */
          ::-webkit-scrollbar {
            width: 12px; /* عرض الشريط */
            height: 12px; /* ارتفاع الشريط عند التمرير أفقيًا */
          }

          ::-webkit-scrollbar-thumb {
            background-color: #805e73; /* لون مقبض الشريط */
            border-radius: 10px; /* منح الشريط شكل دائري */
            border: 3px solid #253237; /* إضافة حد حول مقبض الشريط */
          }

          ::-webkit-scrollbar-track {
            background-color: #253237; /* لون خلفية الشريط */
            border-radius: 10px; /* منح الشريط الخلفي شكل دائري */
          }
        `}
      </style>

      <Parallax ref={parallax} pages={3} style={{ height: '100vh' }}>
        {/* الطبقات الخلفية */}
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        {/* الخلفية النجوم */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
            willChange: 'background-position',
          }}
        />

        {/* الطبقات الأخرى مع التمرير السلس */}
        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={pic23} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        {/* السحب */}
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        {/* التأثيرات السحابية المختلفة */}
        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
        </ParallaxLayer>

        {/* الأرض */}
        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={pic25} style={{ width: '20%' }} className="p5" />
        </ParallaxLayer>

        {/* الطبقة الرئيسية التفاعلية */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={pic24} style={{ width: '20%' }} />
        </ParallaxLayer>

        {/* التفاعل مع صورة Bash */}
        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={pic22} style={{ width: '40%' }} />
        </ParallaxLayer>

        {/* العودة إلى البداية */}
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Squre />
          <img src={pic21} style={{ width: '10%' }} className="p4" />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
