import Image from 'next/image'

export default function MenuLogo () {
  return (
    <Image
              src="/images/logo.png"
              alt="LOGO"
              sizes="100vw"
              style={{
                width: '30',
                height: '30',
              }}
              width={0}
              height={0}
            />
  )
}
