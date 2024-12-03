import { useRef } from 'react'
import { styled } from '@stitches/react'
import { useTrail, animated } from '@react-spring/web'

// الحاوية الرئيسية
const AppContainer = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'none', // خلفية فاتحة
})

// الحاوية الداخلية التي تحتوي على المربعات
const Container = styled('div', {
  display: 'flex',
  gap: 10,
  marginBottom: 80,
  cursor: 'pointer', // جعل المؤشر يبدو كأنه قابل للنقر
})

// مربع فردي
const Box = styled('div', {
  position: 'relative',
  height: 100, // زيادة حجم المربع
  width: 100, // زيادة حجم المربع
})

// الأنماط المشتركة بين الواجهتين
const SharedStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Helvetica',
  fontWeight: 800,
  backfaceVisibility: 'hidden',
  fontSize: '2rem', // زيادة حجم الخط لسهولة القراءة
}

// الوجه الأمامي للمربع
const FrontBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: '#593a8b',
  border: '2px solid rgb(26, 26, 26)',
  borderRadius: '29 px',
})

// الوجه الخلفي للمربع
const BackBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: '#none',
  border: 'solid 2px #6cab64',
  color: '#fafafa',
})

const items = ['W', 'O', 'R', 'D', 'L', 'E'] // الحروف التي سيتم عرضها

export default function Squre() {
  // تهيئة الرسوم المتحركة
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }))

  const isFlipped = useRef(false) // حالة الانقلاب

  // الدالة التي تقوم بتغيير حالة الانقلاب
  const handleClick = () => {
    if (isFlipped.current) {
      api.start({
        rotateX: 0, // العودة إلى الوضع الأصلي
      })
      isFlipped.current = false
    } else {
      api.start({
        rotateX: 180, // التدوير 180 درجة
      })
      isFlipped.current = true
    }
  }

  return (
    <AppContainer>
      <Container onClick={handleClick}>
        {trail.map(({ rotateX }, i) => (
          <Box key={i}>
            {/* الوجه الأمامي */}
            <FrontBox
              key={items[i]}
              style={{
                transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
                transformStyle: 'preserve-3d',
              }}>
              {'?'}
            </FrontBox>
            {/* الوجه الخلفي */}
            <BackBox
              style={{
                transform: rotateX.to(val => `perspective(600px) rotateX(${180 - val}deg)`),
                transformStyle: 'preserve-3d',
              }}>
              {items[i]}
            </BackBox>
          </Box>
        ))}
      </Container>
    </AppContainer>
  )
}
