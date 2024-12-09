'use client'

import Banner from '../components/Banner'

export default function BannerGenerator() {
  const exampleBanner = {
    primaryText: ['Ride', 'and', 'more!'],
    highlightedText: ['secure', 'save'],
    subtitle: {
      prefix: 'Get up to',
      emphasis: '85%',
      suffix: 'off on bike insurance on ACKO!'
    },
    backgroundColor: '#9E57BD',
    primaryColor: '#FFD700',
    highlightTextColor: '#FFFFFF',
    ctaButton: {
      text: 'Check now',
      backgroundColor: '#35823F',
      textColor: '#FFFFFF',
      href: '#'
    },
    logo: {
      src: '/logo.svg',
      alt: 'ACKO Logo'
    },
    productImage: {
      src: '/images/bike.png',
      alt: 'Red Motorcycle'
    },
    footerText: 'Acko General Insurance Limited | IRDAI Reg no. 157 | UID: 5394 | Two Wheeler Package Policy IRDAN157RP0002V01201819 for more details visit www.acko.com | *T&Cs Apply',
    width: 1080,
    height: 1920
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div style={{ transform: 'scale(0.5)' }}>
        <Banner {...exampleBanner} />
      </div>
    </div>
  )
} 