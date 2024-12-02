import { HomeContainer, Product } from '@/styles/pages/home.styles'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import caimseta1 from '@/assets/1.png'
import caimseta2 from '@/assets/2.png'
import caimseta3 from '@/assets/3.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={caimseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Caimseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={caimseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Caimseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={caimseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Caimseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={caimseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Caimseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
