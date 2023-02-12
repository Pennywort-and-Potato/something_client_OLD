import Image from 'next/image'
import React from 'react'

type Props = {

}

async function getDummy() {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  return data
}


async function HomePage(props: Props) {
  const data = await getDummy();
  return (
    <div>
      {data.products.map((dummy: object) => <DataRender dummy={dummy} />)}
    </div>
  )
}

function DataRender({ dummy }: any) {
  return(
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>{dummy.title}</h2>
      <div>
        {dummy.description}
      </div>
      <div>
        {dummy.images.map((image: string) => 
          <Image src={image} alt={''} height={50} width={50} />
        )}
      </div>
    </div>
  )
}

export default HomePage