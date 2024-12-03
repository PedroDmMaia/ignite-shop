import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'
import { HomeContainer, Product } from '@/styles/pages/home.styles'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((item) => (
        <Product key={item.id} className="keen-slider__slide">
          <Image src={item.imageUrl} width={520} height={480} alt="" />

          <footer>
            <strong>{item.name}</strong>
            <span>{item.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  console.log(response.data)

  return {
    props: {
      products,
    },
  }
}
